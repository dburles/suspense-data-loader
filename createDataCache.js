import createSubscription from './lib/createSubscription.js';
import dataLoader from './lib/dataLoader.js';
import serializeKey from './lib/serializeKey.js';

const defaultOptions = { maxEntries: 10000 };

/**
 * Creates a data cache.
 * @kind function
 * @name createDataCache
 * @param {object} userOptions User configurable options.
 * @prop {number} maxEntries The maximum allowed cache entries before old entries are dropped.
 * @returns {DataCache} A dataCache object.
 */
export default function createDataCache(userOptions = defaultOptions) {
  const options = {
    ...defaultOptions,
    ...userOptions,
  };

  const subscription = createSubscription();

  const dataCache = {
    cache: new Map(),
    get(key) {
      return dataCache.cache.get(serializeKey(key));
    },
    set(key, reference) {
      dataCache.cache.set(serializeKey(key), reference);
      if (dataCache.cache.size > options.maxEntries) {
        for (const [key] of dataCache.cache) {
          dataCache.cache.delete(key);
          break;
        }
      }
    },
    async preload(key, asyncFn) {
      return new Promise((resolve) => {
        if (dataCache.get(key)) {
          return resolve(dataCache.get(key).value);
        }
        dataCache.load(key, asyncFn).then(resolve);
      });
    },
    async load(key, asyncFn) {
      return new Promise((resolve) => {
        dataLoader(key, asyncFn, dataCache).load((reference) => {
          resolve(reference.value);
        });
      });
    },
    find(predicateOrKey) {
      let result;
      dataCache.forEach((reference) => {
        if (
          (typeof predicateOrKey === 'function' &&
            predicateOrKey(reference.key)) ||
          predicateOrKey === reference.key
        ) {
          result = reference;
        }
      });
      return result;
    },
    subscription,
    onUpdate: subscription.subscribe,
    reset() {
      dataCache.cache = new Map();
    },
  };

  return dataCache;
}

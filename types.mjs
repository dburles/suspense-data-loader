/**
 * The cache key.
 * @kind typedef
 * @name CacheKey
 * @type {string|Array<string|number>}
 */

/**
 * Loads data into the cache.
 * @kind typedef
 * @name DataCacheLoad
 * @type {Function}
 * @param {CacheKey} key A cache key.
 * @param {Function} asyncFn A function that returns a Promise.
 */

/**
 * @kind typedef
 * @name SubscriptionSubscribe
 * @type {Function}
 * @param {Function} callback A function to call whenever an event occurs.
 * @returns {Function} Unsubscribe.
 */

/**
 * Returns cached entry if found, otherwise calls asyncFn and loads data into the cache.
 * @kind typedef
 * @name DataCachePreload
 * @type {Function}
 * @param {CacheKey} key A cache key.
 * @param {Function} asyncFn A function that returns a Promise.
 */

/**
 * Loads data into this cache reference.
 * @kind typedef
 * @name UseDataLoaderLoad
 * @type {Function}
 * @param {Function} asyncFn A function that returns a Promise.
 */

/**
 * A dataCache object.
 * @kind typedef
 * @name DataCache
 * @type {object}
 * @prop {Map} cache The cache.
 * @prop {Function} get Internal API.
 * @prop {Function} set Internal API.
 * @prop {CreateSubscriptionAPI} subscription Internal API.
 * @prop {DataCachePreload} preload Preload asynchronous data.
 * @prop {DataCacheLoad} load Load asynchronous data.
 * @prop {string|Function} find Find references by key, takes a string or predicate function.
 * @prop {SubscriptionSubscribe} onChange Called whenever cache is updated. First argument is key of updated reference.
 * @prop {Function} reset Resets the cache.
 */

/**
 * A cache reference object.
 * @ignore
 * @kind typedef
 * @name CacheReference
 * @type {object}
 * @prop {boolean} loadOnMount If this reference has mounted once before, we trigger stale-while-revalidate, unless reloadOnMount = false.
 * @prop {CacheKey} key The cache key.
 * @prop {Function} asyncFn User provided async function.
 * @prop {Function} load Calls the async function and loads data.
 * @prop {Function} onUpdate Subscribe to data events.
 */

export { default as createDataCache } from "./createDataCache.js";
export { default as DataCacheContext } from "./DataCacheContext.js";
export { default as useDataLoader } from "./useDataLoader.js";
export { default as usePreloadedData } from "./usePreloadedData.js";

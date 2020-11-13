/**
 * @kind typedef
 * @name CacheKey
 * @type {string|Array<string|number>}
 */

/**
 * A dataCache object.
 * @kind typedef
 * @name DataCache
 * @type {object}
 * @prop {Map} cache The cache.
 * @prop {Function} get Gets a cache Reference.
 * @prop {Function} set
 * @prop {Function} load
 * @prop {Function} reset
 */

/**
 * A cache reference object.
 * @kind typedef
 * @name CacheReference
 * @type {object}
 * @prop {boolean} loadOnMount If this reference has mounted once before, we trigger stale-while-revalidate.
 * @prop {CacheKey} key The cache key.
 * @prop {Function} asyncFn User provided async function.
 * @prop {Function} load Calls the async function and loads data.
 * @prop {Function} onUpdate Subscribe to data events.
 */

/**
 * The useDataLoader API.
 * @kind typedef
 * @name UseDataLoaderAPI
 * @type {Array}
 * @prop {CacheReference} 0 The cache reference.
 * @prop {Function} 1 Load function.
 */

export { default as createDataCache } from './createDataCache.js';
export { default as DataCacheContext } from './DataCacheContext.js';
export { default as useDataLoader } from './useDataLoader.js';
export { default as usePreloadedData } from './usePreloadedData.js';

/**
 * Serializes a cache key.
 * @kind function
 * @name serializedKey
 * @param {CacheKey} key A cache key.
 * @returns {string} The serialized key.
 */
export default function serializeKey(key) {
  return JSON.stringify(key);
}

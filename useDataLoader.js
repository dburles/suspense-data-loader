import { useContext, useEffect, useRef, useState } from 'react';
import DataCacheContext from './DataCacheContext.js';
import serializeKey from './lib/serializeKey.js';

/**
 * React hook that returns a cache reference and load function for a specified cache key.
 * @kind function
 * @name useDataLoader
 * @param {CacheKey} key A cache key.
 * @returns {UseDataLoaderAPI} The useDataLoader API.
 */
export default function useDataLoader(key) {
  const dataCache = useContext(DataCacheContext);
  const [reference, setReference] = useState(dataCache.get(key));
  const serializedKey = serializeKey(key);
  const keyRef = useRef(key);

  /**
   * Loads data for this cache reference.
   * @ignore
   * @kind function
   * @name load
   * @param {Function} asyncFn An asynchronous function.
   */
  function load(asyncFn) {
    setReference(dataCache.load(keyRef.current, asyncFn));
  }

  const loadRef = useRef(load);

  useEffect(() => {
    keyRef.current = key;
    loadRef.current = load;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serializedKey]);

  return [reference, loadRef.current];
}

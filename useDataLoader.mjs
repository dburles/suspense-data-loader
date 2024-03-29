import { useContext, useEffect, useRef, useState } from "react";
import DataCacheContext from "./DataCacheContext.mjs";
import dataLoader from "./dataLoader.mjs";

/**
 * The useDataLoader API.
 * @kind typedef
 * @name UseDataLoaderAPI
 * @type {Array}
 * @prop {CacheReference} 0 The cache reference.
 * @prop {UseDataLoaderLoad} 1 Loads data for this cache reference.
 */

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
  const keyRef = useRef(key);
  const loadRef = useRef(load);

  function load(asyncFn) {
    const reference = dataLoader(key, asyncFn, dataCache);
    reference.load();
    setReference(reference);
  }

  useEffect(() => {
    keyRef.current = key;
    loadRef.current = load;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [reference, loadRef.current];
}

import { useEffect, useReducer } from 'react';
import { REJECTED, RESOLVED } from './lib/dataLoader.js';

/**
 * Access preloaded data, suspends if data is unavailable.
 * @kind function
 * @name usePreloadedData
 * @param {CacheReference} reference A cache reference.
 * @throws {Promise|string}
 * @returns {*} The cached value
 */
export default function usePreloadedData(reference) {
  const [, forceUpdate] = useReducer((x) => {
    return x + 1;
  }, 0);

  useEffect(() => {
    return reference.onUpdate(() => {
      forceUpdate();
    });
  }, [reference]);

  useEffect(() => {
    if (reference.loadOnMount) {
      reference.load();
    }
    return () => {
      reference.loadOnMount = true;
    };
  }, [reference]);

  if (reference.state === RESOLVED) {
    return reference.value;
  } else if (reference.state === REJECTED) {
    throw reference.value;
  }

  throw reference.thenable;
}

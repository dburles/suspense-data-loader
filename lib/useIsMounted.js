import { useEffect, useRef } from 'react';

/**
 * Utility hook for tracking component lifecycle.
 * @kind function
 * @name useIsMounted
 * @returns {Function} A function that returns the current mounted state.
 */
function useIsMounted() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return () => {
    return mountedRef.current;
  };
}

export default useIsMounted;

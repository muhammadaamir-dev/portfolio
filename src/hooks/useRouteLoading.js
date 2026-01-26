import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to manage loading state during route changes
 * 
 * Features:
 * - Shows loader on route change
 * - Hides loader after minimum display time
 * - Prevents loader on same route navigation
 * - Prevents loader on re-renders
 * 
 * @param {number} minLoadingTime - Minimum time to show loader (ms)
 * @returns {boolean} isLoading - Current loading state
 */
const useRouteLoading = (minLoadingTime = 500) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Initial load
  const prevPathRef = useRef(location.pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip on initial mount (already showing loader)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // Hide initial loader after minimum time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }

    // Check if route actually changed
    const currentPath = location.pathname;
    const previousPath = prevPathRef.current;

    // If same route, don't show loader
    if (currentPath === previousPath) {
      return;
    }

    // Route changed - show loader
    console.log(`🔄 Route changed: ${previousPath} → ${currentPath}`);
    setIsLoading(true);

    // Hide loader after minimum time
    const timer = setTimeout(() => {
      setIsLoading(false);
      prevPathRef.current = currentPath;
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [location.pathname, minLoadingTime]);

  return isLoading;
};

export default useRouteLoading;

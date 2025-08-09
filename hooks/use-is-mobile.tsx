import { useCallback, useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, {
      signal: ctrl.signal,
    });

    return () => ctrl.abort();
  }, [checkIsMobile]);

  return isMobile;
}

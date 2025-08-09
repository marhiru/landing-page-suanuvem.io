import { useCallback, useEffect, useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const ctrl = new AbortController();

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, [setIsMobile]);

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile, {
      signal: ctrl.signal,
    });

    return () => ctrl.abort();
  }, []);

  return isMobile;
}

import { useEffect } from "react";

export function RegisterServiceWorker() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const id = window.setTimeout(() => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline / preview hosts may reject SW */
      });
    }, 400);
    return () => window.clearTimeout(id);
  }, []);
  return null;
}

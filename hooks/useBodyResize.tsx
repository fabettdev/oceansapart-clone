"use client";

import { useEffect, useState } from "react";

export default function useBodyResize(): number | null {
  const [size, setSize] = useState<number | null>(null);

  function handleResize(size: number): void {
    setSize(size);
  }

  function handleObserver(entries: ResizeObserverEntry[]): void {
    handleResize(entries[0].target.clientWidth);
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleObserver);
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  return size;
}

import { useRef, useCallback } from "react";

export function usePersistFn<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useCallback(
    (...args: Parameters<T>): ReturnType<T> => {
      return fnRef.current(...args);
    },
    []
  );

  return persistFn as T;
}

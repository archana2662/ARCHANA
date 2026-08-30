import { useState, useCallback } from "react";

export function useComposition({
  onCompositionStart,
  onCompositionEnd,
  onChange,
}: {
  onCompositionStart?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} = {}) {
  const [isComposing, setIsComposing] = useState(false);

  const handleCompositionStart = useCallback(
    (e: React.CompositionEvent<HTMLInputElement>) => {
      setIsComposing(true);
      onCompositionStart?.(e);
    },
    [onCompositionStart]
  );

  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<HTMLInputElement>) => {
      setIsComposing(false);
      onCompositionEnd?.(e);
    },
    [onCompositionEnd]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isComposing) {
        onChange?.(e);
      }
    },
    [isComposing, onChange]
  );

  return {
    isComposing,
    handleCompositionStart,
    handleCompositionEnd,
    handleChange,
  };
}

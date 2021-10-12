import copy from "copy-to-clipboard";
import { useRef, useState } from "react";

export const useCopy = () => {
  const [showCopied, setShowCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyText = (text: string): void => {
    copy(text);
    setShowCopied(true);

    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowCopied(false);
      timeoutRef.current = null;
    }, 1500);
  };

  return { showCopied, copyText };
};

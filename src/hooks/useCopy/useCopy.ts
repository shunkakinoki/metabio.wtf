import copy from "copy-to-clipboard";
import { useRef, useState } from "react";

export const useCopy = () => {
  const [isCopied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyText = (text: string): void => {
    copy(text);
    setCopied(true);

    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      timeoutRef.current = null;
    }, 1500);
  };

  return { isCopied, copyText };
};

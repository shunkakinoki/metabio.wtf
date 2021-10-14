import { ClipboardCopyIcon, CheckCircleIcon } from "@heroicons/react/solid";

import { useCallback } from "react";

import { METABIO_BASE } from "@/const/social";
import { useCopy } from "@/hooks/useCopy";

export type ProfileHeroButtonProps = {
  value: string;
};
export const ProfileHeroButton = ({ value }) => {
  const { isCopied, copyText } = useCopy();

  const handleCopy = useCallback(() => {
    return copyText(`${METABIO_BASE}/${value}`);
  }, [copyText, value]);

  return (
    <button
      type="button"
      className="inline-flex items-center py-3 px-6 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
      onClick={handleCopy}
    >
      {isCopied && (
        <CheckCircleIcon className="mr-3 -ml-1 w-5 h-5" aria-hidden="true" />
      )}
      {!isCopied && (
        <ClipboardCopyIcon className="mr-3 -ml-1 w-5 h-5" aria-hidden="true" />
      )}
      {isCopied ? "Copied!" : "Copy Profile URL"}
    </button>
  );
};

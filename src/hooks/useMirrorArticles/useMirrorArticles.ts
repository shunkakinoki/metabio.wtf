import useSWR from "swr";

import { MIRROR_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchMirrorArticles } from "@/libs/mirror";
import { removeSwrPath } from "@/libs/utils";

export const useMirrorArticles = () => {
  const key = useSwrPath(MIRROR_SWR);

  const { data, error } = useSWR<{
    [x: string]: any;
  }>(key, profileAddress => {
    return fetchMirrorArticles(removeSwrPath(MIRROR_SWR, profileAddress));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    mirrorArticles: data,
  };
};

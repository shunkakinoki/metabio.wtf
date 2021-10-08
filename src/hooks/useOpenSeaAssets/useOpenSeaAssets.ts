import useSWR from "swr";

import { OPENSEA_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchOpenseaAssets } from "@/libs/opensea";
import { removeSwrPath } from "@/libs/utils";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = () => {
  const key = useSwrPath(OPENSEA_SWR);

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(
    key,
    profileAddress => {
      return fetchOpenseaAssets(removeSwrPath(OPENSEA_SWR, profileAddress));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { OPENSEA_SWR } from "@/const/swr";
import { fetchOpenseaAssets } from "@/libs/opensea";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = () => {
  const address = useRecoilValue(addressAtom);

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return OPENSEA_SWR + address;
  }, [address]);

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(key, address => {
    return fetchOpenseaAssets(address.replace(OPENSEA_SWR, ""));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

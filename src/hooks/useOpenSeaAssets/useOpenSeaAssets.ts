import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { OPENSEA_API_URL } from "@/const/api";
import { OPENSEA_SWR } from "@/const/swr";
import { fetcher } from "@/libs/fetcher";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = () => {
  const address = useRecoilValue(addressAtom);

  const ASSETS = "/assets?&limit=3&owner=";

  const key = useMemo(() => {
    return OPENSEA_SWR + address;
  }, [address]);

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(
    address ? key : null,
    address => {
      return fetcher(
        OPENSEA_API_URL + ASSETS + address.replace(OPENSEA_SWR, ""),
      );
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

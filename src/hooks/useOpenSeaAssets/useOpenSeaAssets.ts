import { useRecoilState } from "recoil";
import useSWR from "swr";

import { web3Atom } from "@/atoms/web3";
import { fetcher } from "@/libs/fetcher";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = (address: string | null, offset = 0) => {
  const [web3] = useRecoilState(web3Atom);
  const key = `https://api.opensea.io/api/v1/assets?owner=${address}&limit=50&offset=${offset}`;

  const { data, error, mutate } = useSWR<{ assets: OpenseaAsset[] }>(
    web3 && address ? key : null,
    fetcher,
  );

  return {
    error,
    mutate,
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

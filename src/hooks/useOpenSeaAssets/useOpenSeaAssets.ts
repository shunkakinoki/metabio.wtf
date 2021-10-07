import { useRecoilState } from "recoil";
import useSWR from "swr";

import { web3ProviderAtom } from "@/atoms/web3Provider";
import { fetcher } from "@/libs/fetcher";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = (address: string | null, offset = 0) => {
  const [web3Provider] = useRecoilState(web3ProviderAtom);
  const key = `https://api.opensea.io/api/v1/assets?owner=${address}&limit=50&offset=${offset}`;

  const { data, error, mutate } = useSWR<{ assets: OpenseaAsset[] }>(
    web3Provider && address ? key : null,
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

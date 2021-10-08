import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { web3ProviderAtom } from "@/atoms/web3Provider";
import { fetcher } from "@/libs/fetcher";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = (offset = 0) => {
  const address = useRecoilValue(addressAtom);
  const web3Provider = useRecoilValue(web3ProviderAtom);

  const key = `https://api.opensea.io/api/v1/assets?owner=${address}&limit=50&offset=${offset}`;

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(
    web3Provider && address ? key : null,
    fetcher,
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

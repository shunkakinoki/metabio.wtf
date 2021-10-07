import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { web3ProviderAtom } from "@/atoms/web3Provider";
import { fetcher } from "@/libs/fetcher";
import type { Token, TokensEntity } from "@/types/token";

export const useTokens = () => {
  const address = useRecoilValue(addressAtom);
  const web3Provider = useRecoilValue(web3ProviderAtom);

  const key = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${process.env.NEXT_PUBLIC_ETHPLORER_API_KEY}`;

  const { data, error, mutate } = useSWR<Token>(
    web3Provider && address ? key : null,
    fetcher,
  );

  return {
    error,
    mutate,
    isLoading: !error && !data,
    isError: !!error,
    tokens: data?.tokens.filter(entry => {
      return entry.tokenInfo.holdersCount > 10;
    }) as TokensEntity[],
  };
};

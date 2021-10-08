import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { ETHPLORER_API_URL } from "@/const/api";
import { TOKEN_SWR } from "@/const/swr";
import { fetcher } from "@/libs/fetcher";
import type { Token, TokensEntity } from "@/types/token";

export const useTokens = () => {
  const address = useRecoilValue(addressAtom);

  const API_URL = address => {
    return `${ETHPLORER_API_URL}/getAddressInfo/${address}?apiKey=${process.env.NEXT_PUBLIC_ETHPLORER_API_KEY}`;
  };

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return TOKEN_SWR + address;
  }, [address]);

  const { data, error, mutate } = useSWR<Token>(key, address => {
    return fetcher(API_URL(address.replace(TOKEN_SWR, "")));
  });

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

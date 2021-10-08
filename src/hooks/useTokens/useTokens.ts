import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { TOKEN_SWR } from "@/const/swr";
import { fetchToken } from "@/libs/token";
import type { Token, TokensEntity } from "@/types/token";

export const useTokens = () => {
  const address = useRecoilValue(addressAtom);

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return TOKEN_SWR + address;
  }, [address]);

  const { data, error, mutate } = useSWR<Token>(key, address => {
    return fetchToken(address.replace(TOKEN_SWR, ""));
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

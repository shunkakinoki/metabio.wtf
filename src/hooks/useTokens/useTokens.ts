import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { TOKEN_SWR } from "@/const/swr";
import { fetchToken } from "@/libs/token";
import type { Token, TokensEntity } from "@/types/token";

export const useTokens = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return TOKEN_SWR + profileAddress;
  }, [profileAddress]);

  const { data, error, mutate } = useSWR<Token>(key, profileAddress => {
    return fetchToken(profileAddress.replace(TOKEN_SWR, ""));
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

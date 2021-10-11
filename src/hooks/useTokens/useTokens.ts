import useSWR from "swr";

import { TOKEN_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchToken } from "@/libs/token";
import { removeSwrPath } from "@/libs/utils";
import type { Token, TokensEntity } from "@/types/token";

export const useTokens = () => {
  const key = useSwrPath(TOKEN_SWR);

  const { data, error, mutate } = useSWR<Token>(key, profileAddress => {
    return fetchToken(removeSwrPath(TOKEN_SWR, profileAddress));
  });

  return {
    error,
    mutate,
    isLoading: !error && !data,
    isError: !!error,
    tokens: data?.tokens?.filter(entry => {
      return entry.tokenInfo.holdersCount > 10;
    }) as TokensEntity[],
  };
};

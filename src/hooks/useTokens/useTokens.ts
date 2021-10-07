import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { fetcher } from "@/libs/fetcher";

export const useTokens = () => {
  const address = useRecoilValue(addressAtom);

  const key = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${process.env.NEXT_PUBLIC_ETHPLORER_API_KEY}`;

  const { data, error, mutate } = useSWR<any>(key, fetcher);

  return {
    error,
    mutate,
    isLoading: !error && !data,
    isError: !!error,
    tokens: data?.tokens.filter(entry => {
      return (
        entry.tokenInfo.totalSupply > 100000 &&
        entry.tokenInfo.holdersCount > 10
      );
    }),
  };
};

import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { POAP_SWR } from "@/const/swr";
import { fetchPoaps } from "@/libs/poap";
import type { Poap } from "@/types/poap";

export const usePoaps = () => {
  const address = useRecoilValue(addressAtom);

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return POAP_SWR + address.toLowerCase();
  }, [address]);

  const { data, error } = useSWR<{ accounts: { tokens: Poap[] } }>(
    key,
    address => {
      return fetchPoaps(address.replace(POAP_SWR, ""));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    poaps: data?.accounts[0]?.tokens as Poap[],
  };
};

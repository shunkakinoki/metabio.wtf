import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { POAP_SWR } from "@/const/swr";
import { fetchPoaps } from "@/libs/poap";
import { concatSwrPath, removeSwrPath } from "@/libs/utils";
import type { Poap } from "@/types/poap";

export const usePoaps = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return concatSwrPath(POAP_SWR, profileAddress.toLowerCase());
  }, [profileAddress]);

  const { data, error } = useSWR<{ accounts: { tokens: Poap[] } }>(
    key,
    profileAddress => {
      return fetchPoaps(removeSwrPath(POAP_SWR, profileAddress));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    poaps: data?.accounts[0]?.tokens as Poap[],
  };
};

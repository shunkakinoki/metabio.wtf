import useSWR from "swr";

import { POAP_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchPoaps } from "@/libs/poap";
import { removeSwrPath } from "@/libs/utils";
import type { Poap } from "@/types/poap";

export const usePoaps = () => {
  const key = useSwrPath(POAP_SWR);

  const { data, error } = useSWR<{ accounts: { tokens: Poap[] } }>(
    key,
    profileAddress => {
      return fetchPoaps(removeSwrPath(POAP_SWR, profileAddress.toLowerCase()));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    poaps: data?.accounts[0]?.tokens as Poap[],
  };
};

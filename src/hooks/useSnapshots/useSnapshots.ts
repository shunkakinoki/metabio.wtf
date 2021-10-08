import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { SNAPSHOT_SWR } from "@/const/swr";
import { fetchSnapshots } from "@/libs/snapshot";
import type { Snapshot } from "@/types/snapshot";

export const useSnapshots = () => {
  const address = useRecoilValue(addressAtom);

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return SNAPSHOT_SWR + address;
  }, [address]);

  const { data, error } = useSWR<{ votes: Snapshot[] }>(key, address => {
    return fetchSnapshots(address.replace(SNAPSHOT_SWR, ""));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    snapshots: data?.votes as Snapshot[],
  };
};

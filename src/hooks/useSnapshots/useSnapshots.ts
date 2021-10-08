import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { SNAPSHOT_SWR } from "@/const/swr";
import { fetchSnapshots } from "@/libs/snapshot";
import type { Snapshot } from "@/types/snapshot";

export const useSnapshots = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return SNAPSHOT_SWR + profileAddress;
  }, [profileAddress]);

  const { data, error } = useSWR<{ votes: Snapshot[] }>(key, profileAddress => {
    return fetchSnapshots(profileAddress.replace(SNAPSHOT_SWR, ""));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    snapshots: data?.votes as Snapshot[],
  };
};

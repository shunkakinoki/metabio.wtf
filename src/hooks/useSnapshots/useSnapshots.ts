import useSWR from "swr";

import { SNAPSHOT_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { fetchSnapshots } from "@/libs/snapshot";
import { removeSwrPath } from "@/libs/utils";
import type { Snapshot } from "@/types/snapshot";

export const useSnapshots = () => {
  const key = useSwrPath(SNAPSHOT_SWR);

  const { data, error } = useSWR<{ votes: Snapshot[] }>(key, profileAddress => {
    return fetchSnapshots(removeSwrPath(SNAPSHOT_SWR, profileAddress));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    snapshots: data?.votes as Snapshot[],
  };
};

import { request } from "graphql-request";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { SNAPSHOT_API_URL } from "@/const/api";
import { SNAPSHOT_QUERY } from "@/queries/snapshot";
import type { Snapshot } from "@/types/snapshot";

export const useSnapshots = () => {
  const address = useRecoilValue(addressAtom);

  const { data, mutate, error } = useSWR(
    [SNAPSHOT_QUERY, address],
    (query, address) => {
      return request(SNAPSHOT_API_URL, query, { address });
    },
  );

  return {
    error,
    mutate,
    isLoading: !error && !data,
    isError: !!error,
    snapshots: data?.votes as Snapshot[],
  };
};

import { request } from "graphql-request";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { SNAPSHOT_API_URL } from "@/const/api";
import { SNAPSHOT_SWR } from "@/const/swr";
import { SNAPSHOT_QUERY } from "@/queries/snapshot";
import type { Snapshot } from "@/types/snapshot";

export const useSnapshots = () => {
  const address = useRecoilValue(addressAtom);

  const { data, error } = useSWR(
    address ? SNAPSHOT_SWR + address : null,
    address => {
      return request(SNAPSHOT_API_URL, SNAPSHOT_QUERY, {
        address: address.replace(SNAPSHOT_SWR, ""),
      });
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    snapshots: data?.votes as Snapshot[],
  };
};

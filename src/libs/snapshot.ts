import { request } from "graphql-request";

import { SNAPSHOT_BASE_URL } from "@/const/api";
import { SNAPSHOT_QUERY } from "@/queries/snapshot";
import type { Snapshot } from "@/types/snapshot";

export const fetchSnapshots = (address): Promise<{ votes: Snapshot[] }> => {
  return request(SNAPSHOT_BASE_URL, SNAPSHOT_QUERY, {
    address: address,
  });
};

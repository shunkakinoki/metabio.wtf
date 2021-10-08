import { request } from "graphql-request";

import { POAP_BASE_URL } from "@/const/api";
import { POAP_QUERY } from "@/queries/poap";
import type { Poap } from "@/types/poap";

export const fetchPoaps = (
  address: string,
): Promise<{ accounts: { tokens: Poap[] } }> => {
  return request(POAP_BASE_URL, POAP_QUERY, {
    address: address,
  });
};

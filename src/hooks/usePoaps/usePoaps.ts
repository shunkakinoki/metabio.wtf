import { request } from "graphql-request";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { POAP_API_URL } from "@/const/api";
import { POAP_QUERY } from "@/queries/poap";
import type { Poap } from "@/types/poap";

export const usePoaps = () => {
  const address = useRecoilValue(addressAtom);

  const { data, error } = useSWR(
    address ? [POAP_QUERY, address?.toLowerCase()] : null,
    (query, address) => {
      return request(POAP_API_URL, query, { address });
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    poaps: data?.accounts[0].tokens as Poap[],
  };
};

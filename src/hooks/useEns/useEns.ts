import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { addressAtom } from "@/atoms/address";
import { ENS_SWR } from "@/const/swr";
import { lookupEnsAddress } from "@/libs/ens";

export const useEns = () => {
  const address = useRecoilValue(addressAtom);

  const key = useMemo(() => {
    if (!address) {
      return null;
    }
    return ENS_SWR + address;
  }, [address]);

  const { data, error, mutate } = useSWR<string>(key, address => {
    return lookupEnsAddress(address.replace(ENS_SWR, ""));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    ens: data,
    setEns: mutate,
  };
};

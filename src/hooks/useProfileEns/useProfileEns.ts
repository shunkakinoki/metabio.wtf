import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { ENS_SWR } from "@/const/swr";
import { lookupEnsAddress } from "@/libs/ens";

export const useProfileEns = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return ENS_SWR + profileAddress;
  }, [profileAddress]);

  const { data, error, mutate } = useSWR<string>(key, address => {
    return lookupEnsAddress(address.replace(ENS_SWR, ""));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    profileEns: data,
    setProfileEns: mutate,
  };
};

import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { ENS_SWR } from "@/const/swr";
import { lookupEnsAddress } from "@/libs/ens";
import { concatSwrPath, removeSwrPath } from "@/libs/utils";

export const useProfileEns = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return concatSwrPath(ENS_SWR, profileAddress);
  }, [profileAddress]);

  const { data, error, mutate } = useSWR<string>(key, profileAddress => {
    return lookupEnsAddress(removeSwrPath(ENS_SWR, profileAddress));
  });

  return {
    isLoading: !error && !data,
    isError: !!error,
    profileEns: data,
    setProfileEns: mutate,
  };
};

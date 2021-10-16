import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { ENS_SWR } from "@/const/swr";
import { lookupEnsAddress } from "@/libs/ens";
import { removeSwrPath, concatSwrPath } from "@/libs/utils";

export const useProfileEns = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);
  const key = concatSwrPath(ENS_SWR, profileAddress);

  const { data, error, mutate } = useSWR<string>(
    key,
    profileAddress => {
      return lookupEnsAddress(removeSwrPath(ENS_SWR, profileAddress));
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    profileEns: data,
    setProfileEns: mutate,
  };
};

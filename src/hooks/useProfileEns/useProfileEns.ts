import useSWR from "swr";

import { ENS_SWR } from "@/const/swr";
import { useSwrPath } from "@/hooks/useSwrPath";
import { lookupEnsAddress } from "@/libs/ens";
import { removeSwrPath } from "@/libs/utils";

export const useProfileEns = () => {
  const key = useSwrPath(ENS_SWR);

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

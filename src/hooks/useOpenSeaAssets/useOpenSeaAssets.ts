import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { OPENSEA_SWR } from "@/const/swr";
import { fetchOpenseaAssets } from "@/libs/opensea";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return OPENSEA_SWR + profileAddress;
  }, [profileAddress]);

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(
    key,
    profileAddress => {
      return fetchOpenseaAssets(profileAddress.replace(OPENSEA_SWR, ""));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

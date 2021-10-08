import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import useSWR from "swr";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { OPENSEA_SWR } from "@/const/swr";
import { fetchOpenseaAssets } from "@/libs/opensea";
import { concatSwrPath, removeSwrPath } from "@/libs/utils";
import type { OpenseaAsset } from "@/types/opensea";

export const useOpenSeaAssets = () => {
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (!profileAddress) {
      return null;
    }
    return concatSwrPath(OPENSEA_SWR, profileAddress);
  }, [profileAddress]);

  const { data, error } = useSWR<{ assets: OpenseaAsset[] }>(
    key,
    profileAddress => {
      return fetchOpenseaAssets(removeSwrPath(OPENSEA_SWR, profileAddress));
    },
  );

  return {
    isLoading: !error && !data,
    isError: !!error,
    assets: data?.assets,
  };
};

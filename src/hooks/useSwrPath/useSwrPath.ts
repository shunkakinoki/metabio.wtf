import { useRouter } from "next/router";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import { addressAtom } from "@/atoms/address";
import { profileAddressAtom } from "@/atoms/profileAddress";
import { concatSwrPath } from "@/libs/utils";

export const useSwrPath = (swr: string) => {
  const { asPath } = useRouter();
  const address = useRecoilValue(addressAtom);
  const profileAddress = useRecoilValue(profileAddressAtom);

  const key = useMemo(() => {
    if (asPath === "/profile" || asPath === "/profile/edit") {
      if (!profileAddress) {
        return null;
      }
      return concatSwrPath(swr, profileAddress);
    }
    if (!address) {
      return null;
    }
    return concatSwrPath(swr, address);
  }, [address, profileAddress, asPath, swr]);

  return key;
};

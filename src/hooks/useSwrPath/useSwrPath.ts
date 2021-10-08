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
    if (!profileAddress) {
      return null;
    }
    if (asPath === "/profile") {
      return concatSwrPath(swr, profileAddress);
    }
    return concatSwrPath(swr, address);
  }, [address, profileAddress, asPath, swr]);

  return key;
};

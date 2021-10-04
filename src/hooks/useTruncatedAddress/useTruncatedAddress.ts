import { useRecoilValue } from "recoil";

import { userAddressAtom } from "@/atoms/userAddress";
import { formatAddressShort } from "@/lib/utils";

export const useTruncatedAddress = () => {
  const value = useRecoilValue(userAddressAtom);
  return formatAddressShort(value);
};

import { useRecoilValue } from "recoil";

import { addressAtom } from "@/atoms/address";
import { formatAddressShort } from "@/libs/utils";

export const useAddressTruncated = () => {
  const value = useRecoilValue(addressAtom);
  return formatAddressShort(value);
};

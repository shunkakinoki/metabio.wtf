import { useRecoilValue } from "recoil";

import { addressAtom } from "@/atoms/address";
import { formatAddressShort } from "@/lib/utils";

export const useAddressTruncated = () => {
  const value = useRecoilValue(addressAtom);
  return formatAddressShort(value);
};

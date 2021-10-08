import { useRecoilValue } from "recoil";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { formatAddressShort } from "@/libs/utils";

export const useProfileAddressTruncated = () => {
  const value = useRecoilValue(profileAddressAtom);
  return formatAddressShort(value);
};

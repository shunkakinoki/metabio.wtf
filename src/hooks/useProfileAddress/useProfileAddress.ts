import { useRecoilState } from "recoil";

import { profileAddressAtom } from "@/atoms/profileAddress";

export const useProfileProfileAddress = () => {
  const [profileaddress, setProfileAddress] =
    useRecoilState(profileAddressAtom);

  return { profileaddress, setProfileAddress };
};

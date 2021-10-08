import { useRecoilState } from "recoil";

import { profileAddressAtom } from "@/atoms/profileAddress";

export const useProfileAddress = () => {
  const [profileAddress, setProfileAddress] =
    useRecoilState(profileAddressAtom);

  return { profileAddress, setProfileAddress };
};

import { useRecoilState } from "recoil";

import { userAddressAtom } from "@/atoms/userAddress";

export const useUserAddress = () => {
  const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);

  return { userAddress, setUserAddress };
};

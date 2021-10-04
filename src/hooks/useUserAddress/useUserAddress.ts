import { useEffect } from "react";
import { useRecoilState, atom } from "recoil";

import { useWeb3 } from "@/hooks/useWeb3/useWeb3";

export const userAddressAtom = atom<string>({
  default: null,
  key: "userAddress",
});

export const useUserAddress = () => {
  const { web3 } = useWeb3();
  const [userAddress, setUserAddress] = useRecoilState(userAddressAtom);

  useEffect(() => {
    if (!web3) return;

    web3.getSigner().getAddress().then(setUserAddress);
  }, [setUserAddress, web3]);

  return { userAddress, setUserAddress };
};

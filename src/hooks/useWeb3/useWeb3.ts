import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { userAddressAtom } from "@/atoms/userAddress";
import { web3Atom } from "@/atoms/web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useRecoilState(web3Atom);
  const setUserAddress = useSetRecoilState(userAddressAtom);

  useEffect(() => {
    if (!web3) return;

    web3.getSigner().getAddress().then(setUserAddress);
  }, [setUserAddress, web3]);

  return { web3, setWeb3 };
};

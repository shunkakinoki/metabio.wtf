import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { addressAtom } from "@/atoms/address";
import { web3ProviderAtom } from "@/atoms/web3Provider";

export const useWeb3Provider = () => {
  const [web3Provider, setWeb3Provider] = useRecoilState(web3ProviderAtom);
  const setUserAddress = useSetRecoilState(addressAtom);

  useEffect(() => {
    if (!web3Provider) {
      return;
    }

    web3Provider.getSigner().getAddress().then(setUserAddress);
  }, [setUserAddress, web3Provider]);

  return { web3Provider, setWeb3Provider };
};

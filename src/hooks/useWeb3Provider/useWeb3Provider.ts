import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { web3ProviderAtom } from "@/atoms/web3Provider";

export const useWeb3Provider = () => {
  const [web3Provider, setWeb3Provider] = useRecoilState(web3ProviderAtom);
  const setProfileAddress = useSetRecoilState(profileAddressAtom);

  useEffect(() => {
    if (!web3Provider) {
      return;
    }

    web3Provider.getSigner().getAddress().then(setProfileAddress);
  }, [setProfileAddress, web3Provider]);

  return { web3Provider, setWeb3Provider };
};

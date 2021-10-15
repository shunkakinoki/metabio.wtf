import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { authenticatedAtom } from "@/atoms/authenticated";
import { profileAddressAtom } from "@/atoms/profileAddress";
import { web3ProviderAtom } from "@/atoms/web3Provider";
import { fetchWallet, createWallet } from "@/libs/wallet";

export const useWeb3Provider = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(authenticatedAtom);
  const [web3Provider, setWeb3Provider] = useRecoilState(web3ProviderAtom);
  const [profileAddress, setProfileAddress] =
    useRecoilState(profileAddressAtom);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchWallet(profileAddress);
      if (!res.data) {
        createWallet(profileAddress);
      }
      setIsAuthenticated(true);
    };
    if (!isAuthenticated && profileAddress) {
      fetchData();
    }
  }, [profileAddress, isAuthenticated, setIsAuthenticated]);

  useEffect(() => {
    if (!web3Provider) {
      return;
    }

    web3Provider.getSigner().getAddress().then(setProfileAddress);
  }, [setProfileAddress, web3Provider]);

  return { web3Provider, setWeb3Provider };
};

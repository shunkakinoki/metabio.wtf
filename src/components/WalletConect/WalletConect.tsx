import { providers } from "ethers";

import { useEffect, useState } from "react";
import type { ButtonHTMLAttributes, FC } from "react";

import { useWeb3 } from "@/hooks/useWeb3/useWeb3";
import { useWeb3Modal } from "@/hooks/useWeb3Modal/useWeb3Modal";
import { formatAddressShort } from "@/lib/utils";

export const WalletConect: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { web3, setWeb3 } = useWeb3();
  const [userAddress, setUserAddress] = useState<string>("");
  const web3Modal = useWeb3Modal();

  useEffect(() => {
    if (!web3Modal.cachedProvider) return;

    connectWallet();
  }, []);

  useEffect(() => {
    if (!web3) return;

    web3.getSigner().getAddress().then(setUserAddress);
  }, [web3]);

  const connectWallet = () => {
    return web3Modal
      .connect()
      .then(provider => {
        return new providers.Web3Provider(provider);
      })
      .then(setWeb3);
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3(null);
    setUserAddress("");
  };

  return (
    <button onClick={web3 ? disconnectWallet : connectWallet} {...props}>
      {userAddress ? formatAddressShort(userAddress) : children}
    </button>
  );
};

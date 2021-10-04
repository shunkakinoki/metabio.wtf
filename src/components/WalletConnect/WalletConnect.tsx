import { providers } from "ethers";

import { useCallback, useEffect } from "react";
import type { ButtonHTMLAttributes, FC } from "react";

import { useUserAddress } from "@/hooks/useUserAddress";
import { useWeb3 } from "@/hooks/useWeb3/useWeb3";
import { useWeb3Modal } from "@/hooks/useWeb3Modal/useWeb3Modal";

export const WalletConnect: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { web3, setWeb3 } = useWeb3();
  const { userAddress, setUserAddress } = useUserAddress();
  const web3Modal = useWeb3Modal();

  const connectWallet = useCallback(() => {
    return web3Modal
      .connect()
      .then(provider => {
        return new providers.Web3Provider(provider);
      })
      .then(setWeb3);
  }, [setWeb3, web3Modal]);

  useEffect(() => {
    if (!web3Modal.cachedProvider) {
      return;
    }

    connectWallet();
  }, [connectWallet, web3Modal?.cachedProvider]);

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3(null);
    setUserAddress("");
  };

  return (
    <button onClick={web3 ? disconnectWallet : connectWallet} {...props}>
      {userAddress ? "Disconnect" : children}
    </button>
  );
};

import { providers } from "ethers";

import { useCallback, useEffect } from "react";
import type { ButtonHTMLAttributes, FC } from "react";

import { useProfileAddress } from "@/hooks/useProfileAddress";
import { useProfileEns } from "@/hooks/useProfileEns";
import { useWeb3Modal } from "@/hooks/useWeb3Modal";
import { useWeb3Provider } from "@/hooks/useWeb3Provider";

export const WalletConnect: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { web3Provider, setWeb3Provider } = useWeb3Provider();
  const { profileAddress, setProfileAddress } = useProfileAddress();
  const { setProfileEns } = useProfileEns();
  const web3Modal = useWeb3Modal();

  const connectWallet = useCallback(() => {
    return web3Modal
      .connect()
      .then(provider => {
        return new providers.Web3Provider(provider);
      })
      .then(setWeb3Provider);
  }, [setWeb3Provider, web3Modal]);

  useEffect(() => {
    if (!web3Modal.cachedProvider) {
      return;
    }

    connectWallet();
  }, [connectWallet, web3Modal?.cachedProvider]);

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3Provider(null);
    setProfileAddress("");
    setProfileEns("");
  };

  return (
    <button
      onClick={web3Provider ? disconnectWallet : connectWallet}
      {...props}
    >
      {profileAddress ? "Disconnect" : children}
    </button>
  );
};

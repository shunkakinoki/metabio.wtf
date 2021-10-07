import { providers } from "ethers";

import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import type { ButtonHTMLAttributes, FC } from "react";

import { useAddress } from "@/hooks/useAddress";
import { useEns } from "@/hooks/useEns";
import { useWeb3Modal } from "@/hooks/useWeb3Modal";
import { useWeb3Provider } from "@/hooks/useWeb3Provider";

export const WalletConnect: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const { web3Provider, setWeb3Provider } = useWeb3Provider();
  const { address, setAddress } = useAddress();
  const { setEns } = useEns();
  const web3Modal = useWeb3Modal();
  const router = useRouter();

  const connectWallet = useCallback(() => {
    return web3Modal
      .connect()
      .then(provider => {
        return new providers.Web3Provider(provider);
      })
      .then(setWeb3Provider);
  }, [setWeb3Provider, web3Modal]);

  useEffect(() => {
    if (web3Provider && address) {
      router.push("/profile");
    }
    if (!address) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (!web3Modal.cachedProvider) {
      return;
    }

    connectWallet();
  }, [connectWallet, web3Modal?.cachedProvider]);

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3Provider(null);
    setAddress("");
    setEns("");
  };

  return (
    <button
      onClick={web3Provider ? disconnectWallet : connectWallet}
      {...props}
    >
      {address ? "Disconnect" : children}
    </button>
  );
};

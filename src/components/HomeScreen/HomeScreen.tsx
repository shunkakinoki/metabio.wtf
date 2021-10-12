import type { FC } from "react";

import { HomeHero } from "@/components/HomeHero";
import { WalletConnect } from "@/components/WalletConnect";

export const HomeScreen: FC = () => {
  return (
    <>
      <HomeHero />
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
    </>
  );
};

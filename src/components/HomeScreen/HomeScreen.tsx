import type { FC } from "react";

import { Header } from "@/components/Header";
import { HomeHero } from "@/components/HomeHero";
import { WalletConnect } from "@/components/WalletConnect";

export const HomeScreen: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <Header />
      <HomeHero />
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
    </div>
  );
};

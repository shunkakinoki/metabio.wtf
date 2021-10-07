import type { FC } from "react";

import { GallerySection } from "@/components/GallerySection";
import { WalletConnect } from "@/components/WalletConnect";

export const ProfileScreen: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
      <GallerySection />
    </div>
  );
};

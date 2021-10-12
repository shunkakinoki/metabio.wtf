import type { FC } from "react";

import { GallerySection } from "@/components/GallerySection";
import { WalletConnect } from "@/components/WalletConnect";

export const GalleryScreen: FC = () => {
  return (
    <>
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
      <GallerySection />
    </>
  );
};

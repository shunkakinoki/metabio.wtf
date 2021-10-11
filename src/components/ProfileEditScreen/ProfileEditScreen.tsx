import type { FC } from "react";

import { GallerySectionEdit } from "@/components/GallerySectionEdit";
import { WalletConnect } from "@/components/WalletConnect";

export const ProfileEditScreen: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <WalletConnect className="p-3 text-white rounded-lg border">
        Connect Wallet
      </WalletConnect>
      <GallerySectionEdit />
    </div>
  );
};

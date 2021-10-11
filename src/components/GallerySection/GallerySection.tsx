import type { FC } from "react";

import { GalleryNFT } from "@/components/GalleryNFT";
import { GalleryPoap } from "@/components/GalleryPoap";
import { GallerySnapshot } from "@/components/GallerySnapshot";
import { GalleryToken } from "@/components/GalleryToken";
import { ProfileHero } from "@/components/ProfileHero";

export const GallerySection: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <ProfileHero />
      <GalleryNFT />
      <GalleryPoap />
      <GallerySnapshot />
      <GalleryToken />
    </div>
  );
};

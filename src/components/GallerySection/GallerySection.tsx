import type { FC } from "react";

import { GallerySectionNFT } from "@/components/GallerySectionNFT";
import { GallerySectionPoap } from "@/components/GallerySectionPoap";
import { GallerySectionSnapshot } from "@/components/GallerySectionSnapshot";
import { GallerySectionToken } from "@/components/GallerySectionToken";
import { ProfileHero } from "@/components/ProfileHero";

export const GallerySection: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <ProfileHero />
      <GallerySectionNFT />
      <GallerySectionPoap />
      <GallerySectionSnapshot />
      <GallerySectionToken />
    </div>
  );
};

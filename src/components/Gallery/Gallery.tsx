import type { FC } from "react";

import { GalleryLayout } from "@/components/GalleryLayout";
import { GallerySectionMirror } from "@/components/GallerySectionMirror";
import { GallerySectionNFT } from "@/components/GallerySectionNFT";
import { GallerySectionPin } from "@/components/GallerySectionPin";
import { GallerySectionPoap } from "@/components/GallerySectionPoap";
import { GallerySectionSnapshot } from "@/components/GallerySectionSnapshot";
import { GallerySectionToken } from "@/components/GallerySectionToken";
import { ProfileHero } from "@/components/ProfileHero";

export const Gallery: FC = () => {
  return (
    <GalleryLayout>
      <ProfileHero />
      <GallerySectionPin />
      <GallerySectionNFT />
      <GallerySectionPoap />
      <GallerySectionSnapshot />
      <GallerySectionMirror />
      <GallerySectionToken />
    </GalleryLayout>
  );
};

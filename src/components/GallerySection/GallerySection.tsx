import type { FC } from "react";

import { GalleryMirror } from "@/components/GalleryMirror";
import { GalleryPoap } from "@/components/GalleryPoap";
import { GallerySnapshot } from "@/components/GallerySnapshot";
import { GalleryToken } from "@/components/GalleryToken";
import { ProfileHero } from "@/components/ProfileHero";

export const GallerySection: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <ProfileHero />
      <GalleryPoap />
      <GalleryMirror />
      <GallerySnapshot />
      <GalleryToken />
    </div>
  );
};

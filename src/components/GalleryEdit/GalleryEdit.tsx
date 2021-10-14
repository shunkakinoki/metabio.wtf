import type { FC } from "react";

import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";

import { GalleryLayout } from "@/components/GalleryLayout";
import { GallerySectionDrop } from "@/components/GallerySectionDrop";
import { GallerySectionMirror } from "@/components/GallerySectionMirror";
import { GallerySectionNFT } from "@/components/GallerySectionNFT";
import { GallerySectionPoap } from "@/components/GallerySectionPoap";
import { GallerySectionSnapshot } from "@/components/GallerySectionSnapshot";
import { GallerySectionToken } from "@/components/GallerySectionToken";
import { ProfileHero } from "@/components/ProfileHero";

export const GalleryEdit: FC = () => {
  return (
    <GalleryLayout>
      <DndProvider backend={HTML5Backend}>
        <ProfileHero />
        <GallerySectionDrop />
        <GallerySectionNFT editable />
        <GallerySectionMirror editable />
        <GallerySectionPoap editable />
        <GallerySectionSnapshot editable />
        <GallerySectionToken editable />
      </DndProvider>
    </GalleryLayout>
  );
};

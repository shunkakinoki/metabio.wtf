import type { FC } from "react";

import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";

import { GallerySectionDrop } from "@/components/GallerySectionDrop";
import { GallerySectionNFT } from "@/components/GallerySectionNFT";
import { GallerySectionPoap } from "@/components/GallerySectionPoap";
import { GallerySectionSnapshot } from "@/components/GallerySectionSnapshot";
import { GallerySectionToken } from "@/components/GallerySectionToken";
import { ProfileHero } from "@/components/ProfileHero";

export const GallerySectionEdit: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <DndProvider backend={HTML5Backend}>
        <ProfileHero />
        <GallerySectionDrop />
        <GallerySectionNFT editable />
        <GallerySectionPoap editable />
        <GallerySectionSnapshot editable />
        <GallerySectionToken editable />
      </DndProvider>
    </div>
  );
};

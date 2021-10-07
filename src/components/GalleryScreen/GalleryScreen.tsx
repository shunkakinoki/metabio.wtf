import type { FC } from "react";

import { GallerySection } from "@/components/GallerySection";

export const GalleryScreen: FC = () => {
  return (
    <div className="flex flex-col bg-blueGray-100">
      <GallerySection />
    </div>
  );
};

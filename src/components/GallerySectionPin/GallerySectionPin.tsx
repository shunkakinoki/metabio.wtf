import type { FC } from "react";

import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { usePins } from "@/hooks/usePins";

export const GallerySectionPin: FC = () => {
  const { pins } = usePins();

  if (!pins?.length) {
    return null;
  }

  return (
    <GallerySection defaultOpen type="pin">
      {pins &&
        pins.map((pin, index) => {
          return (
            <GalleryItem
              key={index}
              type={pin.type}
              value={pin?.value}
              src={pin?.src}
            />
          );
        })}
    </GallerySection>
  );
};

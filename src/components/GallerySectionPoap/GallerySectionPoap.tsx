import type { FC } from "react";

import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { usePoaps } from "@/hooks/usePoaps";

const poapImage = (eventId: string) => {
  return `https://api.poap.xyz/token/${eventId}/image`;
};

export type GallerySectionPoapProps = {
  editable?: boolean;
};

export const GallerySectionPoap: FC<GallerySectionPoapProps> = ({
  editable = false,
}) => {
  const { poaps } = usePoaps();

  return (
    <GallerySection title="POAP">
      {poaps &&
        poaps.map((poap, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                type="poap"
                src={poapImage(poap.id)}
              />
            );
          }
          return (
            <GalleryItem key={index} type="poap" src={poapImage(poap.id)} />
          );
        })}
    </GallerySection>
  );
};

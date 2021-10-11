import type { FC } from "react";

import { Gallery } from "@/components/Gallery";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
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
    <Gallery>
      {poaps &&
        poaps.map((poap, index) => {
          if (editable) {
            return <GalleryEditItem key={index} src={poapImage(poap.id)} />;
          }
          return <GalleryItem key={index} src={poapImage(poap.id)} />;
        })}
    </Gallery>
  );
};

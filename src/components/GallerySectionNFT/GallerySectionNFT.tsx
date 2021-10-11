import type { FC } from "react";

import { Gallery } from "@/components/Gallery";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { useOpenSeaAssets } from "@/hooks/useOpenSeaAssets";

export type GallerySectionNFTProps = {
  editable?: boolean;
};

export const GallerySectionNFT: FC<GallerySectionNFTProps> = ({
  editable = false,
}) => {
  const { assets } = useOpenSeaAssets();

  return (
    <Gallery>
      {assets &&
        assets.map((asset, index) => {
          if (editable) {
            return (
              <GalleryEditItem key={index} src={asset.image_preview_url} />
            );
          }
          return <GalleryItem key={index} src={asset.image_preview_url} />;
        })}
    </Gallery>
  );
};

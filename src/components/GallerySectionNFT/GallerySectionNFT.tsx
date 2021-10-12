import type { FC } from "react";

import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { useOpenSeaAssets } from "@/hooks/useOpenSeaAssets";

export type GallerySectionNFTProps = {
  editable?: boolean;
};

export const GallerySectionNFT: FC<GallerySectionNFTProps> = ({
  editable = false,
}) => {
  const { assets } = useOpenSeaAssets();

  return (
    <GallerySection>
      {assets &&
        assets.map((asset, index) => {
          if (editable) {
            return (
              <GalleryEditItem key={index} src={asset.image_preview_url} />
            );
          }
          return <GalleryItem key={index} src={asset.image_preview_url} />;
        })}
    </GallerySection>
  );
};

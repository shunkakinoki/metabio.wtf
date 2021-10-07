import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useOpenSeaAssets } from "@/hooks/useOpenSeaAssets";

export const GalleryNFT = () => {
  const { assets } = useOpenSeaAssets();

  return (
    <Gallery>
      {assets &&
        assets.map((asset, index) => {
          return <GalleryItem key={index} src={asset.image_preview_url} />;
        })}
    </Gallery>
  );
};

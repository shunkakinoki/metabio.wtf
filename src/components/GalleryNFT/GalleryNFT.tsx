import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useAddress } from "@/hooks/useAddress";
import { useOpenSeaAssets } from "@/hooks/useOpenSeaAssets";

export const GalleryNFT = () => {
  const { address } = useAddress();
  const { assets } = useOpenSeaAssets(address ?? null);

  return (
    <Gallery>
      {assets &&
        assets.map((asset, index) => {
          return <GalleryItem key={index} src={asset.image_preview_url} />;
        })}
    </Gallery>
  );
};

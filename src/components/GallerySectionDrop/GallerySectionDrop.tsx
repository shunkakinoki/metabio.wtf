import { GalleryDustBin } from "@/components/GalleryDustBin";
import { GallerySection } from "@/components/GallerySection";

export const GallerySectionDrop = () => {
  return (
    <GallerySection>
      <GalleryDustBin index={0} />
      <GalleryDustBin index={1} />
      <GalleryDustBin index={2} />
      <GalleryDustBin index={3} />
      <GalleryDustBin index={4} />
      <GalleryDustBin index={5} />
    </GallerySection>
  );
};

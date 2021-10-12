import { Gallery } from "@/components/Gallery";
import { GalleryDustBin } from "@/components/GalleryDustBin";

export const GallerySectionDrop = () => {
  return (
    <Gallery>
      <GalleryDustBin index={0} />
      <GalleryDustBin index={1} />
      <GalleryDustBin index={2} />
      <GalleryDustBin index={3} />
      <GalleryDustBin index={4} />
      <GalleryDustBin index={5} />
    </Gallery>
  );
};

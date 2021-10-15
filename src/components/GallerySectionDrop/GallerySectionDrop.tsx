import { GalleryDustBin } from "@/components/GalleryDustBin";
import { GallerySectionLayout } from "@/components/GallerySection";

export const GallerySectionDrop = () => {
  return (
    <div className="py-3 px-2 md:px-3 mx-auto w-full max-w-5xl">
      <GallerySectionLayout>
        <GalleryDustBin index={0} />
        <GalleryDustBin index={1} />
        <GalleryDustBin index={2} />
        <GalleryDustBin index={3} />
        <GalleryDustBin index={4} />
        <GalleryDustBin index={5} />
      </GallerySectionLayout>
    </div>
  );
};

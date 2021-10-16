import { GalleryDustBin } from "@/components/GalleryDustBin";
import { GallerySectionLayout } from "@/components/GallerySection";
import { usePins } from "@/hooks/usePins";

export const GallerySectionDrop = () => {
  const { pins } = usePins();

  return (
    <div className="py-3 px-2 md:px-3 mx-auto w-full max-w-5xl">
      <GallerySectionLayout>
        {pins &&
          pins.map((pin, index) => {
            return (
              <GalleryDustBin
                key={index}
                index={index}
                src={pin?.src}
                value={pin?.value}
                type={pin.type}
              />
            );
          })}
      </GallerySectionLayout>
    </div>
  );
};

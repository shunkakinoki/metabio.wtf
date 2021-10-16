import { GalleryDustBin } from "@/components/GalleryDustBin";
import { GallerySectionLayout } from "@/components/GallerySection";
import { usePins } from "@/hooks/usePins";

export const GallerySectionDrop = () => {
  const { pins } = usePins();

  return (
    <div className="py-3 px-2 md:px-3 mx-auto w-full max-w-5xl">
      <GallerySectionLayout>
        {[0, 1, 2, 3, 4, 5].map(index => {
          const pin =
            pins?.filter(pin => {
              return pin.index === index;
            })?.[0] ?? null;
          return (
            <GalleryDustBin
              key={index}
              index={index}
              src={pin?.src ?? null}
              value={pin?.value ?? null}
              type={pin?.type ?? null}
            />
          );
        })}
      </GallerySectionLayout>
    </div>
  );
};

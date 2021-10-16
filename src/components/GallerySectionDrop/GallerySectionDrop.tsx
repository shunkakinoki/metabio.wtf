import { GalleryDustBin } from "@/components/GalleryDustBin";
import { GallerySectionLayout } from "@/components/GallerySection";
import { usePins } from "@/hooks/usePins";

export const GallerySectionDrop = () => {
  const { pins } = usePins();

  return (
    <div className="py-3 px-2 md:px-3 mx-auto w-full max-w-5xl">
      <GallerySectionLayout>
        {[1, 2, 3, 4, 5, 6].map(index => {
          return (
            <GalleryDustBin
              key={index}
              index={index}
              src={pins?.[index]?.src ?? null}
              value={pins?.[index]?.value ?? null}
              type={pins?.[index]?.type ?? null}
            />
          );
        })}
      </GallerySectionLayout>
    </div>
  );
};

import { Gallery } from "@/components/Gallery";
import { GalleryEditBin } from "@/components/GalleryEditBin";

export const GallerySectionDrop = () => {
  return (
    <Gallery>
      <GalleryEditBin allowedDropEffect="copy" />
      <GalleryEditBin allowedDropEffect="copy" />
      <GalleryEditBin allowedDropEffect="copy" />
      <GalleryEditBin allowedDropEffect="copy" />
      <GalleryEditBin allowedDropEffect="copy" />
      <GalleryEditBin allowedDropEffect="copy" />
    </Gallery>
  );
};

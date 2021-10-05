import { GalleryItem } from "@/components/Gallery/GalleryItem";

export const Gallery = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 p-8 w-full max-w-5xl">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
};

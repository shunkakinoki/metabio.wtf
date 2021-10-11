import type { FC } from "react";

export type GalleryItemProps = {
  alt?: string;
  src: string;
};

export const GalleryItem: FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div className="h-auto bg-blue-500 select-none square">
      <img className="pointer-events-none" src={src} alt={alt} />
    </div>
  );
};

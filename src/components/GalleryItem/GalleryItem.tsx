import clsx from "clsx";
import type { FC } from "react";

export type GalleryItemProps = {
  alt?: string;
  src: string;
  className?: string;
};

export const GalleryItem: FC<GalleryItemProps> = ({ src, alt, className }) => {
  return (
    <div
      className={clsx(
        "flex w-full h-full bg-blue-500 select-none square",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pointer-events-none" src={src} alt={alt} />
    </div>
  );
};

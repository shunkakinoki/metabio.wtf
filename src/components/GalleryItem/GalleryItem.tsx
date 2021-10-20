import clsx from "clsx";
import type { FC } from "react";

import type { GalleryKeys } from "@/types/gallery";

export type GalleryItemProps = {
  alt?: string;
  src?: string;
  className?: string;
  type: GalleryKeys;
  value?: string;
};

export type GalleryItemLayoutProps = Pick<GalleryItemProps, "className">;

export const GalleryItemLayout: FC<GalleryItemLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex overflow-hidden flex-wrap w-full h-full rounded-xl shadow-xl duration-300 hover:scale-110 select-none square",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const GalleryItem: FC<GalleryItemProps> = ({
  src,
  alt,
  className,
  type,
  value,
}) => {
  if (type === "mirror") {
    return (
      <GalleryItemLayout
        className={clsx(
          className,
          "justify-center items-center px-3 bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-600",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {src && <img className="pointer-events-none" src={src} alt={alt} />}
        <h1 className="text-xl md:text-3xl font-bold text-center text-white">
          {value}
        </h1>
      </GalleryItemLayout>
    );
  }

  if (type === "dao") {
    return (
      <GalleryItemLayout
        className={clsx(
          className,
          "justify-center items-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
        )}
      >
        <h1 className="text-xl md:text-3xl font-bold text-center text-white">
          {value}
        </h1>
      </GalleryItemLayout>
    );
  }

  if (type === "token") {
    return (
      <GalleryItemLayout
        className={clsx(
          className,
          "justify-center items-center bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400",
        )}
      >
        <h1 className="text-xl md:text-3xl font-bold text-center text-white">
          ${value}
        </h1>
      </GalleryItemLayout>
    );
  }

  return (
    <GalleryItemLayout className={clsx(className, "bg-transparent")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-full pointer-events-none" src={src} alt={alt} />
    </GalleryItemLayout>
  );
};

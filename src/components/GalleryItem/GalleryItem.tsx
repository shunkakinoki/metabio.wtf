import clsx from "clsx";
import type { FC } from "react";

export type GalleryItemProps = {
  alt?: string;
  src?: string;
  className?: string;
  type: "nft" | "mirror" | "poap" | "snapshot" | "token";
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
        "flex flex-wrap w-full h-full select-none square",
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
          "justify-center items-center px-3 bg-trueGray-600",
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {src && <img className="pointer-events-none" src={src} alt={alt} />}
        <h1 className="text-3xl font-bold text-center text-white">{value}</h1>
      </GalleryItemLayout>
    );
  }

  if (type === "snapshot") {
    return (
      <GalleryItemLayout
        className={clsx(className, "justify-center items-center bg-pink-600")}
      >
        <h1 className="text-3xl font-bold text-center text-white">{value}</h1>
      </GalleryItemLayout>
    );
  }

  if (type === "token") {
    return (
      <GalleryItemLayout
        className={clsx(className, "justify-center items-center bg-pink-600")}
      >
        <h1 className="text-3xl font-bold text-center text-white">${value}</h1>
      </GalleryItemLayout>
    );
  }

  return (
    <GalleryItemLayout className={clsx(className, "bg-blue-600")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pointer-events-none" src={src} alt={alt} />
    </GalleryItemLayout>
  );
};

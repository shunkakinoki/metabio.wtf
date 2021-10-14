import type { FC } from "react";

export const GalleryLayout: FC = ({ children }) => {
  return <div className="flex flex-col py-20 bg-blueGray-100">{children}</div>;
};

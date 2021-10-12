import type { FC } from "react";

export const GallerySection: FC = ({ children }) => {
  return (
    <div className="grid place-items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 p-8 w-full max-w-5xl">
        {children}
      </div>
    </div>
  );
};

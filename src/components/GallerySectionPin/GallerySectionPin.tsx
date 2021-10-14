import type { FC } from "react";

import { GallerySection } from "@/components/GallerySection";

export type GallerySectionMirrorProps = {
  editable?: boolean;
};

export const GallerySectionPin: FC<GallerySectionMirrorProps> = ({
  editable = false,
}) => {
  return <GallerySection type="pin" />;
};

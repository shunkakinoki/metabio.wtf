import type { FC } from "react";

import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { useSnapshots } from "@/hooks/useSnapshots";

export type GallerySectionSnapshotProps = {
  editable?: boolean;
};

export const GallerySectionSnapshot: FC<GallerySectionSnapshotProps> = ({
  editable = false,
}) => {
  const { snapshots } = useSnapshots();

  return (
    <GallerySection>
      {snapshots &&
        snapshots.map((snapshot, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                type="snapshot"
                value={snapshot.space.id}
              />
            );
          }
          return (
            <GalleryItem
              key={index}
              type="snapshot"
              value={snapshot.space.id}
            />
          );
        })}
    </GallerySection>
  );
};

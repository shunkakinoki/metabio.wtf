import type { FC } from "react";

import { Gallery } from "@/components/Gallery";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { useSnapshots } from "@/hooks/useSnapshots";

const snapshotImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export type GallerySectionSnapshotProps = {
  editable?: boolean;
};

export const GallerySectionSnapshot: FC<GallerySectionSnapshotProps> = ({
  editable = false,
}) => {
  const { snapshots } = useSnapshots();

  return (
    <Gallery>
      {snapshots &&
        snapshots.map((snapshot, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                src={snapshotImage(snapshot.space.id)}
              />
            );
          }
          return (
            <GalleryItem key={index} src={snapshotImage(snapshot.space.id)} />
          );
        })}
    </Gallery>
  );
};

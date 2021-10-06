import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useSnapshots } from "@/hooks/useSnapshots";

const snapshotImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export const GallerySnapshot = () => {
  const { snapshots } = useSnapshots();

  return (
    <Gallery>
      {snapshots &&
        snapshots.map((snapshot, index) => {
          return (
            <GalleryItem key={index} src={snapshotImage(snapshot.space.id)} />
          );
        })}
    </Gallery>
  );
};

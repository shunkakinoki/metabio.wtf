import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { usePoaps } from "@/hooks/usePoaps";

const poapImage = (eventId: string) => {
  return `https://api.poap.xyz/token/${eventId}/image`;
};

export const GalleryPoap = () => {
  const { poaps } = usePoaps();

  return (
    <Gallery>
      {poaps &&
        poaps.map((poap, index) => {
          return <GalleryItem key={index} src={poapImage(poap.id)} />;
        })}
    </Gallery>
  );
};

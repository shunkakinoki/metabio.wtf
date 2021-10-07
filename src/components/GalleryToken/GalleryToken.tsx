import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useTokens } from "@/hooks/useTokens";

const tokenImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export const GalleryToken = () => {
  const { tokens } = useTokens();

  return (
    <Gallery>
      {tokens &&
        tokens.map((token, index) => {
          return (
            <GalleryItem
              key={index}
              src={tokenImage(`${token.tokenInfo.symbol}`)}
            />
          );
        })}
    </Gallery>
  );
};

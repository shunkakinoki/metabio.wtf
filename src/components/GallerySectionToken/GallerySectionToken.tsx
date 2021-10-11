import type { FC } from "react";

import { Gallery } from "@/components/Gallery";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { useTokens } from "@/hooks/useTokens";

const tokenImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export type GallerySectionTokenProps = {
  editable?: boolean;
};

export const GallerySectionToken: FC<GallerySectionTokenProps> = ({
  editable = false,
}) => {
  const { tokens } = useTokens();

  return (
    <Gallery>
      {tokens &&
        tokens.map((token, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                src={tokenImage(`${token.tokenInfo.symbol}`)}
              />
            );
          }
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

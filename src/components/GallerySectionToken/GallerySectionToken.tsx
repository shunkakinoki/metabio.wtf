import type { FC } from "react";

import { Empty } from "@/components/Empty";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { GallerySection } from "@/components/GallerySection";
import { useTokens } from "@/hooks/useTokens";

export type GallerySectionTokenProps = {
  editable?: boolean;
};

export const GallerySectionToken: FC<GallerySectionTokenProps> = ({
  editable = false,
}) => {
  const { tokens } = useTokens();

  return (
    <GallerySection type="token">
      {!tokens?.length && <Empty />}
      {tokens &&
        tokens.map((token, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                type="token"
                value={token.tokenInfo.symbol}
              />
            );
          }
          return (
            <GalleryItem
              key={index}
              type="token"
              value={token.tokenInfo.symbol}
            />
          );
        })}
    </GallerySection>
  );
};

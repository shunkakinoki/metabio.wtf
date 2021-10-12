import type { FC } from "react";

import { Gallery } from "@/components/Gallery";
import { GalleryEditItem } from "@/components/GalleryEditItem";
import { GalleryItem } from "@/components/GalleryItem";
import { useMirrorArticles } from "@/hooks/useMirrorArticles";

const mirrorImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export type GallerySectionMirrorProps = {
  editable?: boolean;
};

export const GallerySectionMirror: FC<GallerySectionMirrorProps> = ({
  editable = false,
}) => {
  const { mirrorArticles } = useMirrorArticles();

  return (
    <Gallery>
      {mirrorArticles &&
        mirrorArticles.map((article, index) => {
          if (editable) {
            return (
              <GalleryEditItem
                key={index}
                src={article?.cover_image ?? mirrorImage(article.title)}
              />
            );
          }
          return (
            <GalleryItem
              key={index}
              src={article?.cover_image ?? mirrorImage(article.title)}
            />
          );
        })}
    </Gallery>
  );
};

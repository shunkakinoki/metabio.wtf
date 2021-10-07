import { Gallery } from "@/components/Gallery";
import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useMirrorArticles } from "@/hooks/useMirrorArticles";

const snapshotImage = (eventId: string) => {
  return `https://og.sentrei.com/api/image?fileType=png&layoutName=Sentrei&Theme=Dark&Title=${eventId}&Sub+Title=+`;
};

export const GalleryMirror = () => {
  const { mirrorArticles } = useMirrorArticles();

  return (
    <Gallery>
      {" "}
      {mirrorArticles &&
        mirrorArticles.map((article, index) => {
          return (
            <GalleryItem
              key={index}
              src={article?.cover_image ?? snapshotImage(article.title)}
            />
          );
        })}
    </Gallery>
  );
};

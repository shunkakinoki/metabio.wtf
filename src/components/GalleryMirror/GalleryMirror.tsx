import { Gallery } from "@/components/Gallery";
// import { GalleryItem } from "@/components/Gallery/GalleryItem";
import { useMirrorProfile } from "@/hooks/useMirrorProfile";

export const GalleryMirror = () => {
  const { mirrorProfile } = useMirrorProfile();

  return <Gallery>{JSON.stringify(mirrorProfile)}</Gallery>;
};

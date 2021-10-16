import type { FC } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";

import type { GalleryItemProps } from "@/components/GalleryItem";
import { GalleryItem } from "@/components/GalleryItem";

export const GalleryEditItem: FC<GalleryItemProps> = ({ ...props }) => {
  const [{ opacity }, drag] = useDrag(() => {
    return {
      item: props,
      type: "box",
      collect: (monitor: DragSourceMonitor) => {
        return {
          opacity: monitor.isDragging() ? 10 : 100,
        };
      },
    };
  }, [props]);

  return (
    <div
      ref={drag}
      className={`p-3 border-4 cursor-pointer  border-cyan-500 border-dotted opacity-${opacity}`}
    >
      <GalleryItem {...props} />
    </div>
  );
};

import type { FC } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";

import type { GalleryItemProps } from "@/components/GalleryItem";
import { GalleryItem } from "@/components/GalleryItem";

interface DropResult {
  allowedDropEffect: string;
  dropEffect: string;
  name: string;
}

export const ItemTypes = {
  BOX: "box",
};

export const GalleryEditItem: FC<GalleryItemProps> = ({ ...props }) => {
  const [{ opacity }, drag] = useDrag(() => {
    console.log(opacity);
    return {
      type: ItemTypes.BOX,
      item: { name },
      end(item, monitor) {
        const dropResult = monitor.getDropResult() as DropResult;
        if (item && dropResult) {
          let alertMessage = "";
          const isDropAllowed =
            dropResult.allowedDropEffect === "any" ||
            dropResult.allowedDropEffect === dropResult.dropEffect;

          if (isDropAllowed) {
            const isCopyAction = dropResult.dropEffect === "copy";
            const actionName = isCopyAction ? "copied" : "moved";
            alertMessage = `You ${actionName} ${JSON.stringify(item)} into ${
              dropResult.name
            }!`;
          } else {
            alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
          }
          alert(alertMessage);
        }
      },
      collect: (monitor: DragSourceMonitor) => {
        return {
          opacity: monitor.isDragging() ? 0.4 : 1,
        };
      },
    };
  }, [name]);

  return (
    <div
      ref={drag}
      className={`p-3 border-4 border-cyan-500 border-dotted opacity-[${opacity}]`}
    >
      <GalleryItem {...props} />
    </div>
  );
};

import clsx from "clsx";
import type { FC } from "react";
import { useMemo, useState } from "react";
import { useDrop } from "react-dnd";

import { GalleryItem } from "@/components/GalleryItem";

export const ItemTypes = {
  BOX: "box",
};

export interface DustbinProps {
  index: number;
}

export const GalleryDustBin: FC<DustbinProps> = ({ index }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.BOX,
      drop: (_item, monitor) => {
        setItemProps(monitor.getItem());
        return {
          name: index,
        };
      },
      collect: (monitor: any) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    };
  }, [index]);

  const isActive = useMemo(() => {
    return canDrop && isOver;
  }, [canDrop, isOver]);

  const [itemProps, setItemProps] = useState(null);

  return (
    <div ref={drop}>
      <GalleryItem
        className={clsx(
          "flex p-1 w-full h-full border-4 border-fuchsia-200 border-dotted square",
          canDrop
            ? isActive
              ? "bg-fuchsia-300 opacity-30"
              : "bg-red-300 opacity-80 animate-pulse"
            : "bg-yellow-100",
        )}
        {...itemProps}
      />
    </div>
  );
};

import clsx from "clsx";
import type { FC } from "react";
import { useMemo, useState } from "react";
import { useDrop } from "react-dnd";

import styles from "./GalleryDustBin.module.css";

import { GalleryItem } from "@/components/GalleryItem";

export const ItemTypes = {
  BOX: "box",
};

export interface DustbinProps {
  index: number;
}

export const GalleryDustBin: FC<DustbinProps> = ({ index }) => {
  const [itemProps, setItemProps] = useState(null);

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

  return (
    <div ref={drop}>
      <GalleryItem
        className={clsx(
          "flex p-1 w-full h-full border-4 border-indigo-300 border-dotted square",
          canDrop && !isActive && styles["animate-shake"],
          canDrop
            ? isActive
              ? "bg-sky-300 opacity-30"
              : "bg-indigo-400 opacity-80 animate-pulse"
            : "bg-yellow-100",
        )}
        {...itemProps}
      />
    </div>
  );
};

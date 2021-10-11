import clsx from "clsx";
import type { FC } from "react";
import { useMemo } from "react";
import { useDrop } from "react-dnd";

export const ItemTypes = {
  BOX: "box",
};

export interface DustbinProps {
  allowedDropEffect: string;
}

export const GalleryEditBin: FC<DustbinProps> = ({ allowedDropEffect }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.BOX,
      drop: () => {
        return {
          name: `${allowedDropEffect} Dustbin`,
          allowedDropEffect,
        };
      },
      collect: (monitor: any) => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    };
  }, [allowedDropEffect]);

  const isActive = useMemo(() => {
    return canDrop && isOver;
  }, [canDrop, isOver]);

  return (
    <div
      ref={drop}
      className={clsx(
        "flex w-full h-full square",
        canDrop
          ? isActive
            ? "bg-fuchsia-300"
            : "bg-red-300"
          : "bg-yellow-100",
      )}
      // style={{ backgroundColor }}
    >
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

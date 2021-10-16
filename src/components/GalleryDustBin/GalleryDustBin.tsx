import clsx from "clsx";
import type { FC } from "react";
import { useMemo, useState } from "react";
import { useDrop } from "react-dnd";

import { useRecoilValue } from "recoil";

import styles from "./GalleryDustBin.module.css";

import { profileAddressAtom } from "@/atoms/profileAddress";
import { GalleryItem } from "@/components/GalleryItem";
import type { GalleryItemProps } from "@/components/GalleryItem";
import { createPin } from "@/libs/pin";
import type { Pin } from "@/types/pin";

export const ItemTypes = {
  BOX: "box",
};

export type DustbinProps = GalleryItemProps & {
  index: number;
};

export const GalleryDustBin: FC<DustbinProps> = ({
  index,
  src,
  value,
  type,
}) => {
  const profileAddress = useRecoilValue(profileAddressAtom);
  const [itemProps, setItemProps] = useState(null);

  const [{ canDrop, isOver }, drop] = useDrop(() => {
    return {
      accept: ItemTypes.BOX,
      drop: (_item, monitor) => {
        setItemProps(monitor.getItem());
        const item = monitor.getItem() as Pin;

        console.log(`Item: ${JSON.stringify(item)}`);

        if (!profileAddress) {
          console.log("No profileAddress attached. Returning.");
          return;
        }

        if (!item.type) {
          console.log("No type specified. Returning");
          return;
        }

        createPin(profileAddress, {
          type: item.type,
          index: index,
          src: item?.src,
          value: item?.value,
        });

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
        index={index}
        value={value}
        src={src}
        type={type}
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

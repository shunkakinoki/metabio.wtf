import type { CSSProperties, FC } from "react";
import { useDrop } from "react-dnd";

const style: CSSProperties = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export const ItemTypes = {
  BOX: "box",
};

export interface DustbinProps {
  allowedDropEffect: string;
}

// eslint-disable-next-line func-style
function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
  if (isActive) {
    return "darkgreen";
  } else if (canDrop) {
    return "darkkhaki";
  } else {
    return "#222";
  }
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

  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div
      ref={drop}
      className="w-full h-9 bg-blueGray-600"
      style={{ ...style, backgroundColor }}
    >
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

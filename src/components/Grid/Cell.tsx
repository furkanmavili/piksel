import React from "react";
import { DEFAULT_COLOR } from "../../constants";
import useStore from "../../store/useStore";

type CellProps = {
  size: string;
  x: number;
  y: number;
  color?: string;
  shouldFill: boolean;
  showBorder: boolean;
};

function Cell({ size, x, y, color = "grey", shouldFill, showBorder = true }: CellProps) {
  const fillCelll = useStore((state) => state.fillCell);
  const activeToolValue = useStore((state) => state.activeToolValue);

  const fill = () => {
    fillCelll(x, y, activeToolValue);
  };
  const handleOver = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!shouldFill) return;
    fill();
  };

  const styles = { border: showBorder ? "1px solid grey" : "none", width: size, height: size, backgroundColor: color || DEFAULT_COLOR};

  return <div className=" border-gray-400" onMouseDown={fill} onClick={fill} onMouseOver={handleOver} style={styles} />;
}

export default Cell;

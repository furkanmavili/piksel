import { useEffect, useRef, useState } from "react";
import useStore from "../../store/useStore";
import Cell from "./Cell";

const GRID_WIDTH = 750;
const ZOOM_SPEED = 0.1;

function Grid() {
  const [shouldFill, setShouldFill] = useState(false);
  const [zoom, setZoom] = useState(1);
  const cells = useStore((state) => state.cells);
  const showGrid = useStore((state) => state.showGrid);
  const cellSize = GRID_WIDTH / cells.length;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (!ref.current) return;
      if (e.deltaY > 0) {
        setZoom((prev) => prev - ZOOM_SPEED);
      } else {
        setZoom((prev) => prev + ZOOM_SPEED);
      }
    };
    document.addEventListener("wheel", wheelHandler);
    return () => document.removeEventListener("wheel", wheelHandler);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.transform = `scale(${zoom})`;
    ref.current.style.transform = `scale(${zoom})`;
  }, [zoom]);

  const renderCells = cells.map((row, rowIndex) =>
    row.map((col, colIndex) => (
      <Cell
        key={`${rowIndex}-${colIndex}`}
        size={cellSize + "px"}
        x={rowIndex}
        y={colIndex}
        color={cells[rowIndex][colIndex]}
        shouldFill={shouldFill}
        showBorder={showGrid}
      />
    ))
  );

  return (
    <div
      ref={ref}
      onMouseDown={(e) => {
        e.preventDefault();
        setShouldFill(true);
      }}
      onTouchStart={() => setShouldFill(true)}
      onMouseLeave={() => setShouldFill(false)}
      onMouseUp={() => setShouldFill(false)}
      style={{ maxWidth: GRID_WIDTH }}
      className="flex w-full flex-wrap mx-auto z-10"
    >
      {renderCells}
    </div>
  );
}

export default Grid;

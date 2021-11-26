import { useEffect, useMemo, useRef, useState } from "react";
import useStore, { StoreState } from "../../store/useStore";
import Cell from "./Cell";

const GRID_WIDTH = 750;
const ZOOM_SPEED = 0.1;

const selector = (state: StoreState) => state.cells;

type GridProps = {
  isPreview?: boolean;
};

function Grid({ isPreview }: GridProps) {
  const [shouldFill, setShouldFill] = useState(false);
  const [zoom, setZoom] = useState(1);
  const cells = useStore(selector);
  const showGrid = useStore((state) => state.showGrid);
  const ref = useRef<HTMLDivElement>(null);
  const cellSize = GRID_WIDTH / cells.length;

  // save current cells to localstorage
  useEffect(() => {
    return () => localStorage.setItem("grid", JSON.stringify(cells));
  }, [cells]);

  // scroll zoom
  useEffect(() => {
    if (isPreview) return;
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
  // scroll zoom
  useEffect(() => {
    if (!ref.current || isPreview) return;
    ref.current.style.transform = `scale(${zoom})`;
    ref.current.style.transform = `scale(${zoom})`;
  }, [zoom]);

  const renderCells = useMemo(
    () =>
      cells.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            size={cellSize + "px"}
            x={rowIndex}
            y={colIndex}
            color={cells[rowIndex][colIndex]}
            shouldFill={isPreview ? false : shouldFill}
            showBorder={isPreview ? false : showGrid}
          />
        ))
      ),
    [cells, shouldFill, showGrid]
  );

  return (
    <div className="nes-container is-dark is-rounded p-5">
      <div style={{ height: 790 }} className="overflow-auto">
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
      </div>
    </div>
  );
}

export default Grid;

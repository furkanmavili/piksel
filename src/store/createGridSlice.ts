import { DEFAULT_COLOR, DEFAULT_SIZE } from "../constants";
import { StoreSlice } from "./useStore";
import immer from "immer";

export type Grid = {
  cells: string[][];
  fillCell: (x: number, y: number, color: string) => void;
  resetCells: () => void;
};

const gridSlice: StoreSlice<Grid> = (set, get) => {
  return {
    cells: [...Array(DEFAULT_SIZE).keys()].map((row, rowIndex) =>
      [...Array(DEFAULT_SIZE).keys()].map((col, colIndex) => DEFAULT_COLOR)
    ),
    resetCells: () =>
      set(immer((prev) => {
        prev.cells = prev.cells.map((cell: string[]) => cell.map(col => DEFAULT_COLOR))
      })),
    fillCell: (x, y, color) =>
      set(
        immer((prev) => {
          prev.cells[x][y] = color;
        })
      ),
  };
};
export default gridSlice;

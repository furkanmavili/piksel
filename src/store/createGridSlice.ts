import { DEFAULT_COLOR, DEFAULT_SIZE } from "../constants";
import { StoreSlice } from "./useStore";

export type Grid = {
  cells: string[][];
  addRow: () => void;
  removeRow: () => void;
  addColumn: () => void;
  removeColumn: () => void;
  fillCell: (x: number, y: number, color: string) => void;
  resetCells: () => void;
};

const gridSlice: StoreSlice<Grid> = (set, get) => {
  return {
    cells: [...Array(DEFAULT_SIZE).keys()].map((row, rowIndex) =>
      [...Array(DEFAULT_SIZE).keys()].map((col, colIndex) => DEFAULT_COLOR)
    ),
    resetCells: () =>
      set(() => {
        const newCells = get().cells.map((cell) => cell.map((col) => DEFAULT_COLOR));
        return {
          cells: newCells,
        };
      }),
    fillCell: (x, y, color) =>
      set((prev) => {
        const newCells = [...get().cells];
        newCells[x][y] = color;
        return {
          cells: newCells,
        };
      }),
    addRow: () =>
      set((prev) => {
        let cells = get().cells.map((i) => i); // copy cells
        const newRow = [...Array(cells[0].length).keys()].map((i) => DEFAULT_COLOR); // create new row
        cells.push(newRow);
        return {
          cells,
        };
      }),
    removeRow: () =>
      set((prev) => {
        const newArray = get().cells.map((i) => i);
        newArray.pop();
        return {
          cells: newArray,
        };
      }),
    addColumn: () =>
      set(() => {
        let cells = get().cells.map((row) => [...row, DEFAULT_COLOR]); // copy cells
        return {
          cells,
        };
      }),
    removeColumn: () =>
      set((prev) => {
        let cells = get().cells.map((row) => {
          const newRow = [...row];
          newRow.pop();
          return newRow;
        }); // copy cells
        return {
          cells,
        };
      }),
  };
};
export default gridSlice;

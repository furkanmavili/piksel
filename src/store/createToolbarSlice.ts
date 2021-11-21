import html2canvas from "html2canvas";
import { COLORS } from "../constants";
import { StoreSlice } from "./useStore";

type Tool = {
  name: "pen" | "eraser" | "eyedrop";
  value: string;
};

export type Toolbar = {
  activeTool: Tool;
  setActiveTool: (value: Tool) => void;
};

const toolbarSlice: StoreSlice<Toolbar> = (set, get) => {
  return {
    activeTool: {
      name: "pen",
      value: COLORS[0],
    },
    setActiveTool: (value) => set((prev) => {
      console.log('prev', prev.activeTool)
      console.log('next', value)
      return {
        activeTool: value
      }
    })
  };
};
export default toolbarSlice;

import { COLORS } from "../constants";
import { StoreSlice } from "./useStore";

type Tool =  "pen" | "eraser" | "eyedrop"

export type Toolbar =  {
  activeTool: Tool;
  activeToolValue: string;
  selectTool: (type: Tool) => void;
  setActiveToolValue: (value: string) => void
}

const toolbarSlice: StoreSlice<Toolbar> = (set,  get) => {
  return {
    activeTool: "pen",
    activeToolValue: COLORS[0],
    selectTool: (type) => set(prev => ({activeTool: type})),
    setActiveToolValue: (value) => set(prev => ({activeToolValue: value}))
};
}
export default toolbarSlice;

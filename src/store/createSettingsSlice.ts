import { StoreSlice } from "./useStore";

export type Settings = {
  showGrid: boolean;
  toggleShowGrid: () => void
}

const useSettings: StoreSlice<Settings> = (set, get) => {
  return {
    showGrid: true,
    toggleShowGrid: () => set((prev) => ({showGrid: !prev.showGrid})),
  };
};

export default useSettings;

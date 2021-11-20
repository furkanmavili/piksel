import  { GetState, SetState, StoreApi } from "zustand";
import createGridSlice, { Grid } from "./createGridSlice";
import createSettingsSlice, { Settings } from "./createSettingsSlice";
import createToolbarSlice, {Toolbar} from "./createToolbarSlice"
import create, { UndoState } from 'zundo';

export type StoreState = Grid & Settings  & Toolbar & UndoState

export type StoreSlice<T> = (
  set: SetState<StoreState>,
  get: GetState<StoreState>
) => T

const useStore = create<StoreState>((set, get) => ({
  ...createGridSlice(set, get),
  ...createSettingsSlice(set, get),
  ...createToolbarSlice(set, get),
}))

export default useStore
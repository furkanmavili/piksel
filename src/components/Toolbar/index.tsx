import useStore from "../../store/useStore";
import Palette from "../Palette";

function Toolbar() {
	const resetCells = useStore(state => state.resetCells)
	
  return (
    <div className="flex flex-col space-y-10">
      <div>Toolbar</div>
      <div>
        <button className="nes-btn is-success">
          Save
        </button>
        <button onClick={resetCells} type="button" className="nes-btn">
          Reset
        </button>
      </div>
      <Palette />
    </div>
  );
}

export default Toolbar;

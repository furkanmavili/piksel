import useStore from "../../store/useStore";
import Palette from "../Palette";

function Toolbar() {
  const resetCells = useStore((state) => state.resetCells);

  return (
    <div className="flex flex-col space-y-10  mb-10 md:mb-0">
      <div>Toolbar</div>
      <div className="flex justify-between md:justify-start md:flex-col md:space-y-10">
        <div className="flex flex-col md:flex-row">
          <button className="nes-btn is-success">Save</button>
          <button onClick={resetCells} type="button" className="nes-btn">
            Reset
          </button>
        </div>
        <Palette />
      </div>
    </div>
  );
}

export default Toolbar;

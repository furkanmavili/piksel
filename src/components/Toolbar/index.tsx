import { useState } from "react";
import useStore from "../../store/useStore";
import Palette from "../Palette";
import Preview from "../Preview";
import Tools from "./Tools";

function Toolbar() {
  const resetCells = useStore((state) => state.resetCells);
  const [showPreview, setShowPreview] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-10  mb-10 md:mb-0 nes-container is-dark is-rounded">
        <div>Toolbar</div>
        <div className="flex justify-between md:justify-start md:flex-col md:space-y-10">
          <div className="flex flex-col md:flex-row">
            <button
              onClick={() => setShowPreview(true)}
              type="button"
              className="nes-btn is-success flex-1"
            >
              Kaydet
            </button>
            <button
              onClick={resetCells}
              type="button"
              className="nes-btn flex-1"
            >
              Reset
            </button>
          </div>
          <Tools />
        </div>
        <Palette />
      </div>
      <Preview isOpen={showPreview} closeModal={() => setShowPreview(false)} />
    </>
  );
}

export default Toolbar;

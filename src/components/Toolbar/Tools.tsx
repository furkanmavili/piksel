import { COLORS, DEFAULT_COLOR } from "../../constants";
import Eraser from "../../icons/Eraser";
import Eyedrop from "../../icons/Eyedrop";
import Pen from "../../icons/Pen";
import useStore from "../../store/useStore";

function Tools() {
  const setActiveTool = useStore((state) => state.setActiveTool);

  const handlePen = () => {
    setActiveTool({
      name: "pen",
      value: COLORS[0],
    });
  };
  const handleEraser = () => {
    setActiveTool({
      name: "eraser",
      value: DEFAULT_COLOR,
    });
  };
  const handleEyedrop = () => {
    setActiveTool({
      name: "eyedrop",
      value: "",
    });
  };

  return (
    <div className="flex items-center">
      <button onClick={handlePen} className="nes-btn p-0">
        <Pen />
      </button>
      <button onClick={handleEraser} className="nes-btn p-0">
        <Eraser />
      </button>
      <button onClick={handleEyedrop} className="nes-btn p-0">
        <Eyedrop />
      </button>
    </div>
  );
}

export default Tools;

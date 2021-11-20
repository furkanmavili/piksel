import { COLORS } from "../../constants";
import useStore from "../../store/useStore";

function Palette() {
  const setActiveToolValue = useStore((state) => state.setActiveToolValue);
  const activeToolValue = useStore((state) => state.activeToolValue);

  const handleClick = (color: string) => {
    setActiveToolValue(color);
  };

  return (
    <div className="flex w-52 flex-wrap">
      {COLORS.map((color) => (
        <div
          onClick={() => handleClick(color)}
          style={{ backgroundColor: color, margin: "4px" }}
          className={`w-8 h-8 border-2 border-opacity-0 border-gray-200 hover:border-opacity-100 ${
            color === activeToolValue && "border-opacity-100"
          }`}
        />
      ))}
    </div>
  );
}

export default Palette;

import { COLORS } from "../../constants";
import useStore from "../../store/useStore";

function Palette() {
   const activeTool = useStore(state => state.activeTool)
  const setActiveTool = useStore(state => state.setActiveTool)

  const handleClick = (color: string) => {
    setActiveTool({
      name: "pen",
      value: color
    });
  };

  return (
    <div className="flex w-52 flex-wrap">
      {COLORS.map((color) => (
        <div
          key={color}
          onClick={() => handleClick(color)}
          style={{ backgroundColor: color, margin: "4px" }}
          className={`w-8 h-8 border-2 border-opacity-0 border-gray-200 hover:border-opacity-100 ${
            (color === activeTool.value && activeTool.name === "pen") && "border-opacity-100"
          }`}
        />
      ))}
    </div>
  );
}

export default Palette;

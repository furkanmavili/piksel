import { useEffect } from "react";
import useStore from "../../store/useStore";

function Settings() {
  const handleUndo = useStore((state) => state.undo);
  const handleRedo = useStore((state) => state.redo);
  const toggleGrid = useStore((state) => state.toggleShowGrid);
  const getState = useStore(state => state.getState)

  useEffect(() => {
    if (!handleUndo) return;
    const handler =  (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "z") {
        if (!handleUndo) return;
        handleUndo();
      }
      if (event.ctrlKey && event.key === "y") {
        if (!handleRedo) return;
        handleRedo();
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler)
  }, [handleUndo, handleRedo]);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-between">
        <button className="nes-btn" onClick={handleUndo}>
          Undo
        </button>
        <button className="nes-btn" onClick={handleRedo}>
          Redo
        </button>
      </div>
      <button className="nes-btn" onClick={toggleGrid}>
        Toggle Grid
      </button>
    </div>
  );
}

export default Settings;

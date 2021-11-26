import Layout from "./components/Layout";
import Toolbar from "./components/Toolbar";
import Grid from "./components/Grid";
import Settings from "./components/Settings";
import { useEffect } from "react";
import useStore from "./store/useStore";

function App() {
  const setCells = useStore(state => state.setCells)
  
  useEffect(() => {
    const getItem = localStorage.getItem('grid') 
    if (!getItem) return;
    setCells(JSON.parse(getItem))
  }, [])

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <Toolbar />
        <div className="flex-1 text-center">
          <Grid />
        </div>
        <Settings />
      </div>
    </Layout>
  );
}

export default App;

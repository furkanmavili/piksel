import Layout from "./components/Layout";
import Toolbar from "./components/Toolbar";
import Grid from "./components/Grid";
import Settings from "./components/Settings";

function App() {

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

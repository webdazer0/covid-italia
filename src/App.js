import React from "react";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";
import Selector from "./component/Selector";
import CardList from "./component/CardList";
import Switch from "./component/Switch";
import Layout from "./component/layout/";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import useDarkMode from "./hooks/useDarkMode";
import useIsoCountry from "./hooks/useIsoCountry";

function App() {
  const { checked, setChecked, setDarkMode, mainClass } = useDarkMode();
  const { iso, getIsoCountry } = useIsoCountry();

  return (
    <main className={mainClass}>
      <Layout>
        <div className="container">
          <div className="row">
            <Switch
              checked={checked}
              setChecked={setChecked}
              setDarkMode={setDarkMode}
            />
            <Sidebar col="4" />
            <Main col="8">
              <Selector getIsoCountry={getIsoCountry} />
              <CardList byName={iso} />
            </Main>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;

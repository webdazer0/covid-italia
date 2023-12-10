import React from "react";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";
import Selector from "./component/Selector";
import CardList from "./component/CardList";
import Switch from "./component/Switch";
import Page from "./component/layout/Page";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";
import useApp from "./hooks/useApp";
import AppLayout from "./component/AppLayout";
import "./utils/addLang"; // Aggiunge lingue a timeago.js: Italiano & Spagnolo

function App() {
  // Load initial data
  useApp();
  return (
    <AppLayout>
      <Page>
        <Switch />
        <Sidebar col="4" />
        <Main col="8">
          <Selector />
          <CardList />
        </Main>
      </Page>
    </AppLayout>
  );
}

export default App;

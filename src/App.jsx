import React from "react";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import "./App.css";
import Selector from "./component/selector/Selector";
import CardList from "./component/CardList";
import Switch from "./component/switch/Switch";
import Page from "./component/layout/Page";
import Sidebar from "./component/Sidebar";
import Content from "./component/layout/Content";
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
        <Content col="8">
          <Selector />
          <CardList />
        </Content>
      </Page>
    </AppLayout>
  );
}

export default App;

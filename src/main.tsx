import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import "./index.css";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
//
import * as serviceWorker from "./serviceWorker";
// Handy welcome
import { startWelcome } from "./utils/logger";

startWelcome();

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

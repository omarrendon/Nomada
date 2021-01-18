import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store/store";
import { AppRouter } from "./routes/routes";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

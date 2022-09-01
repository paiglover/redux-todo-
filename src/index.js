import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import Todo from "./components/todo";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>
);

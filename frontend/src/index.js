import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./components/store/FavoritesContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);

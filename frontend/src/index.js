import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './helpers/ScrollToTop'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
);

//el index es el padre de todos, tiene q instalar el metodo browser en toda la app.



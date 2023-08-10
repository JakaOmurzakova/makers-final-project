import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import AuthContext from "./contexts/AuthContext";
import ServicesContext from "./contexts/ServicesContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ServicesContext>
        <App />
      </ServicesContext>
    </AuthContext>
  </BrowserRouter>
);

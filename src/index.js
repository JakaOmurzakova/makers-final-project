import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import AuthContext from "./contexts/AuthContext";
import HotelContext from "./contexts/HotelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <HotelContext>
        <App />
      </HotelContext>
    </AuthContext>
  </BrowserRouter>
);

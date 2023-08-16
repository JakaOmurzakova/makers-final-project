import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

import AuthContext from "./contexts/AuthContext";
import ServicesContext from "./contexts/ServicesContext";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import HotelContext from "./contexts/HotelContext";
import OrderContext from "./contexts/OrderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ServicesContext>
        <HotelContext>
          <OrderContext>
            <App />
          </OrderContext>
        </HotelContext>
      </ServicesContext>
    </AuthContext>
  </BrowserRouter>
);

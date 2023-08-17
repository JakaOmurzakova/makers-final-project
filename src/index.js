import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "./contexts/AuthContext";
import ServicesContext from "./contexts/ServicesContext";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
import HotelContext from "./contexts/HotelContext";
import OrderContext from "./contexts/OrderContext";
import Toastify from "./components/Toastify";
import CommentContext from "./contexts/CommentContext";
import FoodContext from "./contexts/FoodContext";
import CartContext from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
    <AuthContext>
      <ServicesContext>
        <FoodContext>
          <HotelContext>
            <CommentContext>
            <CartContext>
                <OrderContext>
                  <Toastify />
                  <App />
                </OrderContext>
              </CartContext>
              </CommentContext>
            </CartContext>
          </HotelContext>
        </FoodContext>
      </ServicesContext>
    </AuthContext>
  </BrowserRouter>
);

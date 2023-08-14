import React, { createContext } from "react";
import AuthContext, { useAuthContext } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/consts";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
const orderContext = createContext();

export function useOrderContext() {
  return useContext(orderContext);
}

const OrderContext = ({ children }) => {
  const { user } = useAuthContext();
  const [order, setOrder] = useState(false);

  async function orderCard() {
    try {
      const { data } = await axios.post(`${BASE_URL}/account/services/`);
    } catch (e) {
      console.log(e);
    }
  }

  async function getOrderCard() {
    try {
      const { data } = await axios.get(`${BASE_URL}/account/services/`);
    } catch (e) {
      console.log(e);
    }
  }

  async function changeOrderCard() {
    try {
      const { data } = await axios.patch(`${BASE_URL}account/services/`);
    } catch (e) {
      console.log(e);
    }
  }

  const value = { orderCard, getOrderCard, changeOrderCard };
  return (
    <orderContext.Provider value={value}>{children}</orderContext.Provider>
  );
};

export default OrderContext;

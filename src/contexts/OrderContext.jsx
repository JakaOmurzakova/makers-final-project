import React, { createContext } from "react";
import AuthContext, { useAuthContext } from "../contexts/AuthContext";
import { BASE_URL, ORAPI } from "../utils/consts";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
const orderContext = createContext();

export function useOrderContext() {
  return useContext(orderContext);
}

const OrderContext = ({ children }) => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);

  async function postOrder(newOrder) {
    try {
      await axios.post(ORAPI, newOrder);
      getOrders();
    } catch (e) {
      console.log(e);
    }
  }

  async function getOrders() {
    try {
      const { data } = await axios(ORAPI);
      setOrders(data);
    } catch (e) {
      console.log(e);
    }
  }

  const value = {
    postOrder,
    getOrders,
    orders,
  };
  return (
    <orderContext.Provider value={value}>{children}</orderContext.Provider>
  );
};

export default OrderContext;

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API } from "../utils/consts";

const ServiceContext = createContext();

export function useServiceContext() {
  return useContext(ServiceContext);
}

const ServicesContext = ({ children }) => {
  const [services, setServices] = useState([]);

  async function fetchServices() {
    try {
      const response = await axios.get(API);
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    fetchServices,
    services,
    setServices,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServicesContext;

import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
      <Footer />
    </div>
  );
};

export default MainLayout;

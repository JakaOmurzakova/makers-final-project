import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/*<Footer />*/}
      <Outlet />
    </div>
  );
};

export default MainLayout;

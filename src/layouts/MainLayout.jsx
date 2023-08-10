import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Calendeer from "../components/Calendeer";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
      {/*<Calendar />
      <Calendeer />*/}
    </div>
  );
};

export default MainLayout;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import RestaurantPage from "../pages/RestaurantPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import AuthPage from "../pages/AuthPage";
import NotFoundPage from "../pages/NotFoundPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoute;

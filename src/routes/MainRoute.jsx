import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import RestaurantPage from "../pages/RestaurantPage";
import ServicesPage from "../pages/ServicesPage";
import AuthPage from "../pages/AuthPage";
import OrderPage from "../pages/OrderPage";
import NotFoundPage from "../pages/NotFoundPage";
import ActivationPage from "../pages/ActivationPage";
import AddRoomPage from "../pages/hotelRooms/AddRoomPage";
import EditRoomPage from "../pages/hotelRooms/EditRoomPage";

import MenuPage from "../pages/MenuPage";
import CottagePage from "../pages/hotelRooms/CottagePage";
import HotelDetailPage from "../pages/hotelRooms/HotelDetailPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="cottages" element={<CottagePage />} />
        <Route path="/order" element={<OrderPage />} />

        <Route path="/menu" element={<MenuPage />} />

        <Route path="/add-room" element={<AddRoomPage />} />
        <Route path="/edit-room/:id" element={<EditRoomPage />} />
        <Route path="/room-detail/:id" element={<HotelDetailPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/api/account/activate/" element={<ActivationPage />} />
    </Routes>
  );
};

export default MainRoute;

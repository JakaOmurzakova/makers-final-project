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

import CottagePage from "../pages/hotelRooms/CottagePage";
import HotelDetailPage from "../pages/hotelRooms/HotelDetailPage";
//import ProfilePage from "../pages/ProfilePage";
import MenuPage from "../pages/restaurant/MenuPage";
import AddProductPage from "../pages/restaurant/AddProductPage";
import EditProductPage from "../pages/restaurant/EditProductPage";

import ResetPasswordPage from "../pages/ResetPasswordPage";
import EmailSendPage from "../pages/EmailSendPage";

import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="cottages" element={<CottagePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/add-dish" element={<AddProductPage />} />
        <Route path="/edit-dish/:id" element={<EditProductPage />} />

        <Route path="/add-room" element={<AddRoomPage />} />
        <Route path="/edit-room/:id" element={<EditRoomPage />} />
        <Route path="/room-detail" element={<HotelDetailPage />} />

        {/*<Route path="/profile" element={<ProfilePage />} />*/}

        <Route path="/payment" element={<PaymentPage />} />
      </Route>
      <Route
        path="/api/account/reset-password/confirm/"
        element={<ResetPasswordPage />}
      />
      <Route path="/pass-reset" element={<EmailSendPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/api/account/email-verify/" element={<ActivationPage />} />
    </Routes>
  );
};

export default MainRoute;

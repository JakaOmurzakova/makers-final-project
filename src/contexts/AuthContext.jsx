import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { notify } from "../components/Toastify";

const authContext = createContext();

export const useAuthContext = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function register(credentials) {
    try {
      await axios.post(`${BASE_URL}registration/`, credentials);
      notify("Verify your email", "success");
    } catch (error) {
      console.log(error);
    }
  }

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}/login/`,
        credentials
      );
      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}/users/profile/`);

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    setUser(null);
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (tokens) {
        const { data } = await $axios.get(`${BASE_URL}/users/profile/`);

        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function activateUser(code) {
    try {
      await $axios.post(`${BASE_URL}/email-verify/`, { code });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function resetPassword(credentials) {
    try {
      await axios.post(`${BASE_URL}/reset-password/`, credentials);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmResetPassword(credentials, code) {
    try {
      await axios.post(
        `${BASE_URL}/reset-password/confirm/?c=${code}`,
        credentials
      );
      navigate("/auth");
    } catch (e) {
      console.log(e);
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }
    return ADMIN.includes(user.email);
  }

  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
    activateUser,
    confirmResetPassword,
    resetPassword,
    isAdmin,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;

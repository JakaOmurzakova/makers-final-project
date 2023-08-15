import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";
import { notify } from "../components/Toastify";

const authContext = createContext();

export const useAuthContext = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function register(credentials) {
    try {
      await axios.post(`${BASE_URL}/account/registration/`, credentials);
      notify("Verify your email", "success");
    } catch (error) {
      console.log(error);
    }
  }

  async function login(credentials) {
    try {
      const { data: tokens } = await axios.post(
        `${BASE_URL}/account/login/`,
        credentials
      );
      localStorage.setItem("tokens", JSON.stringify(tokens));

      const { data } = await $axios.get(`${BASE_URL}/account/profile/`);

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
        const { data } = await $axios.get(`${BASE_URL}/account/profile/`);

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
      await $axios.post(`${BASE_URL}/account/email-verify/`, { code });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
    activateUser,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;

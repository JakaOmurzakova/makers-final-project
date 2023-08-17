import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { notify } from "../components/Toastify";

const ActivationPage = () => {
  const [searchParams] = useSearchParams();
  const { activateUser } = useAuthContext();
  const navigate = useNavigate();
  console.log(searchParams.get("token"));

  useEffect(() => {
    activateUser(searchParams.get("token"));
    navigate("/auth");
    notify("Login", "default");
  }, []);

  return (
    <Box>
      <h2>Account Activation</h2>
      <div id="preloader">
        <div className="spinner">
          <span className="ball-1"></span>
          <span className="ball-2"></span>
          <span className="ball-3"></span>
          <span className="ball-4"></span>
          <span className="ball-5"></span>
          <span className="ball-6"></span>
          <span className="ball-7"></span>
          <span className="ball-8"></span>
        </div>
      </div>
    </Box>
  );
};

export default ActivationPage;

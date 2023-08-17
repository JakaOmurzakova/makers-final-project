import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPasswordPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const { confirmResetPassword } = useAuthContext();
  function passwordVisibility() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    searchParams.get("c");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const setPassword = Object.fromEntries([...data]);
    confirmResetPassword(setPassword, searchParams.get("c"));
  }

  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>
      <Box
        component="form"
        sx={{
          width: "250px",
          m: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          name="new_password"
          label="New Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{ width: "250px" }}
          margin="normal"
          required
          name="password_confirmation"
          label="Confirm Password"
          type="password"
        />
        <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Change Password
        </Button>
      </Box>
    </div>
  );
};

export default ResetPasswordPage;

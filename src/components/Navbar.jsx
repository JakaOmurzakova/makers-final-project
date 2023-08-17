import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "../style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import logo from "../assets/logo.svg";

const pages = [
  { title: "Home", path: "/" },
  { title: "Restaurant", path: "/restaurant" },
  { title: "Services", path: "/services" },
  { title: "Cottages", path: "/cottages" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuthContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        background: "#15202b",
        borderRadius: "0 0 30px 30px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

          <Box
            component={Link}
            to="/"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img width={40} src={logo} alt="" />
          </Box>

          <Box
            className="navbar_box"
            sx={{
              // display: { xs: "flex", md: "none" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IconButton
              className="navbar_menu__btn"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "start",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography
                  textAlign="center"
                  component={Link}
                  to={"/"}
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  textAlign="right"
                  component={Link}
                  to="/restaurant"
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  Restaurant
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  sx={{ textDecoration: "none", color: "black" }}
                  textAlign="right"
                  component={Link}
                  to={"/services"}
                >
                  Services
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography
                  sx={{ textDecoration: "none", color: "black" }}
                  textAlign="right"
                  component={Link}
                  to={"/cottages"}
                >
                  Cottages
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img width={40} src={logo} alt="" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page) => (
              <Button
                className="navbar_items"
                component={Link}
                key={page.title}
                to={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar alt={user.username} src={user.avatar} />
                ) : (
                  <Avatar />
                )}
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div className="profile_container">
                <div className="navbar_logo__menu_container">
                  {user ? (
                    <img
                      className="navbar_logo__menu_photo"
                      src={user.avatar}
                    />
                  ) : (
                    <Avatar sx={{ width: "200px", height: "200px" }} />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "25px",
                    width: "300px",
                    paddngBottom: "50px",
                  }}
                >
                  <NavLink to="/cart" className="navbar_link">
                    Food Cart
                  </NavLink>
                  {isAdmin() && (
                    <NavLink to="/add-room" className="navbar_link">
                      Add Room
                    </NavLink>
                  )}
                  {isAdmin() && (
                    <NavLink to="/add-dish" className="navbar_link">
                      Add Dish
                    </NavLink>
                  )}

                  {!user ? (
                    <Button
                      component={Link}
                      to="/auth"
                      className="navbar_profile_sign_out"
                    >
                      Sign In
                    </Button>
                  ) : (
                    <Button
                      onClick={() => logout()}
                      className="navbar_profile_sign_out"
                    >
                      Sign Out
                    </Button>
                  )}
                </div>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

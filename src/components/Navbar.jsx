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
import { Link, useNavigate } from "react-router-dom";

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
            <img
              width={50}
              src="https://www.svgrepo.com/show/517445/letter-uppercase-square-r.svg"
              alt=""
            />
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
                  textAlign="right"
                  component={Link}
                  to={"/restaurant"}
                  textDecoration="none"
                >
                  Home
                </Typography>
                <Typography
                  textAlign="right"
                  component={Link}
                  to={"/restaurant"}
                  textDecoration="none"
                >
                  Restaurant
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="right" component={Link} to={"/services"}>
                  Services
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="right" component={Link} to={"/contact"}>
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
            <img
              width={50}
              src="https://www.svgrepo.com/show/517445/letter-uppercase-square-r.svg"
              alt=""
            />
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
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              <div className="navbar_logo__menu_container">
                <img
                  className="navbar_logo__menu_photo"
                  src="https://i.redd.it/w0lmb8i7odo51.png"
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "25px",
                  width: "300px",
                  marginBottom: "50px",
                }}
              >
                <div></div>
                <div>gfhvjbhkjnkl</div>
                <div>fgvhbjnkml</div>
                <button className="navbar_profile_sign_out">Sign Out</button>
              </div>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

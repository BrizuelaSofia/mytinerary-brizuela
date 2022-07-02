import React from "react";
import "../styles/styles.css";
import logo from "../images/logo.png";
import usuario from "../images/loginUser.png";
import { Link as LinkRouter } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container"; /*se declara entre corchetes el nombre del estado y con react
useState lo vamos a usar y entre parentesis se le asigna el valor
los props es la forma q tiene react de pasar parametros entre componentes desde padres a hijos.
 */
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { nombre: "Home", to: "/" },
  { nombre: "Cities", to: "/Cities" },     //nombre del estado  en la constante  entre [] va el valor del estado inicial.
];
const settings = [
  { nombre: "Sign In", to:"/Users" }, 
  { nombre:"Sign Up", to:"/SignUp" }
];   


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);   //nombre del estado  en la constante  entre [] va el valor del estado inicial.

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {  //en esta función se crea el metodo  q abriría el menu y por me
    //dio de una funcion flecha le digo q me retorne el proximo valor del estado en el momento en el q se dispare el Evento.
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
      position="static"
      sx={{ backgroundColor: "#c287a0;" }}   
      className="appbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={logo} alt="logo" style={{ width: "80px" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page, index) => (
                <LinkRouter
                  key={index}
                  to={page.to}
                  onClick={handleCloseNavMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.nombre}</Typography>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
          <Box sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <img
              className="logo"
              src={logo}
              alt={logo}
              style={{ width: "80px" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <LinkRouter key={index} to={page.to} onClick={handleCloseNavMenu}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.nombre}
                </Button>
              </LinkRouter>
            ))}
          </Box>
          <Box></Box>

          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="iconousuario" src={usuario} style={{ width: "100%", backgroundColor:'white', borderRadius:'4rem' }}/>
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
              {settings.map((setting, index) => (
                <LinkRouter key={index} to={setting.to} onClick={handleCloseUserMenu}>
                  <Button textAlign="center">{setting.nombre}</Button>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

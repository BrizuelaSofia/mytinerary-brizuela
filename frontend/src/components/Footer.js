import React from "react";
import "../styles/styles.css";
import logo from "../images/logo.png";
import { Link as LinkRouter } from "react-router-dom";


import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = [
  { nombre: "Home", to: "/" },
  { nombre: "Cities", to: "/Cities" },
];

const Footer = () => {
 //nombre del estado  en la constante  entre [] va el valor del estado inicial.
  

  const handleCloseNavMenu = () => {    //en esta funcion creamos nuestros metodos, en este caso componente funcional le digo q me devuelva mi estado con su valor    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#c287a0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="footericons">
          <div sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
            <img src={logo} alt="logo" style={{ width: "80px" }} />
          </div> 

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {pages.map((item, index) => (
              <LinkRouter key={index} to={item.to} onClick={handleCloseNavMenu}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {item.nombre}
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ color: "black" }}>
            <FacebookRoundedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GitHubIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;

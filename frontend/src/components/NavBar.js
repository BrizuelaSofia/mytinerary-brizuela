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
import Container from "@mui/material/Container"; 
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {useSelector, useDispatch} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import {useNavigate} from "react-router-dom"

const pages = [
  { nombre: "Home", to: "/"  },
  { nombre: "Cities", to: "/Cities" },     
];
const settings = [
  { nombre: "Sign In", to:"/Users" }, 
  { nombre:"Sign Up", to:"/SignUp" }
];   


const NavBar = () => {
  //nombre del estado  en la constante  entre [] va el valor del estado inicial.
  const [anchorElNav, setAnchorElNav] = React.useState(null);   
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const user = useSelector(store => store ) (checkeo store).
  const user = useSelector(store => store.userReducers.user)
 console.log(user)

  const navigate = useNavigate()
  const dispatch = useDispatch()


  //abrir menú (función).
  // retornar el proximo valor del estado en el momento q se dispare el evento.
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
  function signOut() {
    dispatch(usersActions.signOut())
    navigate ("/")
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#c287a0", }}   
      className="footericons"
     
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="footericons2">
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1, mx:5 }}>
            <img src={logo} alt="logo" style={{ width: "80px" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mx:5 }}>
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
                    <Typography>{page.nombre}</Typography>
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
                {user? <Avatar  alt="imageUser" src={user.imageUser} /> : <Avatar src={usuario} style={{ width: "100%", backgroundColor:'white', borderRadius:'4rem', mx:5 }}/> } 
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
              {user ? (
                <Box>
                  <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}} onClick={handleCloseUserMenu}>
                    <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}}
                     onClick={signOut}>Sign Out</Typography>
                  </MenuItem>
                </Box>
               ):
              settings.map((setting, index) => (
                <LinkRouter key={index} to={setting.to} onClick={handleCloseUserMenu}>
                  <Button>{setting.nombre}</Button>
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

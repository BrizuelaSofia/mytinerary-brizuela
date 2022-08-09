import React from 'react'
import './styles/App.css';
import Index from './pages/Index'
import NavBar from './components/NavBar'; 
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Cities from './pages/Cities'
import Detail from './components/Detail'
import Users from './pages/Users'
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from "./redux/actions/citiesActions"
import SignUp from './components/Singup.js';
import SnackBar from './components/Alert';
import userActions from './redux/actions/usersActions';
import { Toaster } from 'react-hot-toast'


function App() {

  const user = useSelector(store => store.userReducers.user)
  console.log(user)
  const dispatch = useDispatch()

  //useffect se fija si hay algun token en el localStorage, 
  //si existe, lo trae, lo guarda en una constante y llama a una accion "VerificationToken"
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem("token")
      //console.log(token)
      dispatch(userActions.VerifyToken(token))
    }
  }, [])


  useEffect(() => {
    dispatch(citiesActions.getCities())
  }, [])
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '1rem',
            color: 'black',
            textAlign: "center",
            fontSize: "14px",
          },
        }} />



      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/City/:id" element={<Detail />} />
        {!user && <Route path="/Users" element={<Users />} />}
        {!user && < Route path="/SignUp" element={<SignUp />} />}
      </Routes>
      <SnackBar />
      <ScrollToTop
        style={{ backGroundColor: "pink" }}
        smooth

      />
      <Footer></Footer>
    </div>
  );
}


export default App


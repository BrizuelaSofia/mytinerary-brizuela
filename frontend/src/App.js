import React from 'react'
import './styles/App.css';
import Index from './pages/Index'
import NavBar from './components/NavBar'; //importo la funcion (componente) desde la carpeta de components y luego de la carpeta donde se encuentra mi función
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Cities from './pages/Cities' 
import Detail from './components/Detail'
import Users from './pages/Users'
import ScrollToTop from "react-scroll-to-top";
import {useEffect} from "react"
import { useDispatch } from 'react-redux';
import citiesActions from "./redux/actions/citiesActions"
import SignUp from './components/Singup.js';
import SnackBar from './components/Alert';








function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(citiesActions.getCities())
      }, [])
    return (

        <div className="App">
         
           <NavBar/>
            <Routes>
               <Route path="/" element={<Index/>} />
               <Route path="/Cities" element={<Cities />} />
               <Route path= "/City/:id" element={<Detail/>} />
               <Route path="/Users" element={<Users/>}  />
               <Route path="/SignUp" element={<SignUp/>}  />
            </Routes>
            <SnackBar/>
            <ScrollToTop
            style={{backGroundColor:"pink"}}
            smooth
           
            />
            <Footer></Footer>
          
            
        </div>
    );
}


  export default App


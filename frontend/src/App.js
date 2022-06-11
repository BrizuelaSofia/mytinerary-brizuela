import React from 'react'
import './styles/App.css';
import Index from './pages/Index'
import NavBar from './components/NavBar'; //importo la funcion (componente) desde la carpeta de components y luego de la carpeta donde se encuentra mi función
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import Cities from './pages/Cities' 
import Detail from './components/Detail'


function App() {  //<componente/> <componente><componente/> (dos formas distintas de llamar a los componentes)
    return (
        <div className="App">
           <NavBar/>
            <Routes>
               <Route path="/" element={<Index/>} />
               <Route path="/Cities" element={<Cities />} />
               <Route path= "/City/:id" element={<Detail/>} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
// con el :id le indicamos q le vamos a pasar un parametro.

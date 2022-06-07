import React from 'react'
import './styles/App.css';
import Main from './components/Main';
import Header from './components/NavBar'; //importo la funcion (componente) desde la carpeta de components y luego de la carpeta donde se encuentra mi función
import Footer from './components/Footer';
function App() {  //<componente/> <componente><componente/> (dos formas distintas de llamar a los componentes)
  return (
    <div className="App">
     <Header/>
     <Main></Main>
    
     <Footer></Footer>
    </div>
  );
}

export default App;

import React from "react";
import "../styles/styles.css";
import "../styles/styleHero.css";
import CalltoAction from "./CalltoAction";

function Hero() {
  return (
     <div className='fondodetodo'>
    <div className="hero">
      <h1 className="herotitulo"> My Tinerary</h1>
      <div className="herotext">
        <h5 className="heroparrafo">
          "Find your perfect trip, designed by insiders who know and love their
          cities!"
        </h5>
       
        
        <CalltoAction />
      </div>
    </div>
    </div>
    
  );
}

export default Hero;

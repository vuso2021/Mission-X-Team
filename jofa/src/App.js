import logo from './logo.svg';
import star from './logo2.jpg';
import flagnz from './img/nz.jpg';
import flagmaori from './img/maori.jpg';
import baloon from './img/baloonkid.jpg';

import React from 'react';
import './App.css';

function TopHeader() {
  return (
    
    // Header container
    <div className="topNav">

      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">
        <p>HOME </p>
        <p>FEATURES</p>
        <p>TEACHERS</p>
      </div>

      <div className="topNavUser">

        <div className="topFlagLang">

          <p>LANG:
            <img src={flagnz} alt="NZ Flag" />
            <img src={flagmaori} alt="Maori Flag" />
          </p>



        </div>
        
        <div className="topNavLogin">
          <p> <i class="fa fa-user-circle" aria-hidden="true"></i>  REGISTER  |  LOGIN</p>
        </div>

      </div>

    </div>

  );
}



//Section 1
function Section1(){
  return (
    <div className="sec1">
      
        <img src={baloon} className="baloonk"/>
      
    </div>
  );
}


function App() {
  return (
    <div>
      <TopHeader />
      <Section1/>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}













export default App;

import logo from './logo.svg';
import star from './logo2.jpg';
import flagnz from './img/nz.jpg';
import flagmaori from './img/maori.jpg';
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



//


function App() {
  return (
    <div>
      <TopHeader />

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}













export default App;

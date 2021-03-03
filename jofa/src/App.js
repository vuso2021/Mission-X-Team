import logo from './logo.svg';
import star from './logo2.jpg';
import flagnz from './img/nz.jpg';
import flagmaori from './img/maori.jpg';
import baloon from './img/baloonkid.jpg';

import React from 'react';
import './App.css';

// Header container
function TopHeader() {
  return (
    
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
      
      <div className="sec11">
        <h1> Prepare young minds for a better future.</h1>

        <p className="psec1"> Let us help you advance students in Digital Technologies 
          and other learning areas with our project-based learning programme.
        </p>

        <button>LEARN MORE</button>
        
        <button>SIGN UP</button>
        
        <p className="psec11">*Basic subscription includes the first 15 project 
          free of charge.
        </p>

      </div>

      <div className="sec12"></div>
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

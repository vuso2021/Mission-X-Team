import logo from './logo.svg';
import star from './logo2.jpg';
import flagnz from './img/nz.jpg';
import flagmaori from './img/maori.jpg';
import React from 'react';
import './App.css';

function Naav() {
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
        <div className='topNavLang'>
          <p className="topFlagLang">LANG: 
          <img src={flagnz} className="nzflag" alt="NZ Flag" />
          <img src={flagmaori} className="maoriflag" alt="Maori Flag" />
          </p>
        </div>
        
        <p>REGISTER</p>
        <p> | </p>
        <p>LOGIN</p>

      </div>

    </div>


  );
}




function App() {
  return (
    <div>
      <Naav />
      
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>

    </div>
  );
}













export default App;

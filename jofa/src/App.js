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

        <nav>
          <ul>
            <li>
              <a href="#" className="a1">HOME </a>
            </li>
            <li>
              <a href="#" className="a1">FEATURES </a>
            </li>
            <li>
              <a href="#" className="a1">TEACHERS </a>
            </li>
          </ul>
        </nav>

      </div>

      <div className="topNavUser">
        
      <div >
                <div className="topNavLogin">
                <p>
                  <a href="#" className="a1"><i class="fa fa-user-circle" aria-hidden="true"></i>
               REGISTER | LOGIN </a>
                </p>
                </div>
              </div>
              
              <div>
                <div className="topFlagLang">
                  <p>LANG: <img src={flagnz} alt="NZ Flag" /> <img src={flagmaori} alt="Maori Flag" />
                  </p>
                </div>
              </div>
            
              
          




      </div>

    </div>

  );
}



//Section 1
function Section1() {
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


//Section 2
function Section2() {
  return (
    <div className="sec21">
      <h2> What we offer </h2>
      <p className="psec1"> 
      The Creative Problem Solving programme is series of digital creation projects 
      aimed to encourage self-motivation and student agency, designed by New Zealand's 
      leading IT industry experts and schools.
     <br></br>
     </p>

     <h3> What will students create? </h3>
      <p className="psec1"> 
      The Creative Problem Solving programme is series of digital creation projects 
      aimed to encourage self-motivation and student agency, designed by New Zealand's 
      leading IT industry experts and schools.
     <br></br>
     </p>

      <div className="sec22">

      </div>
    </div>
  );
}












function App() {
  return (
    <div>
      <TopHeader />
      <Section1 />
      <Section2 />

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

      </header>

    </div>
  );
}













export default App;

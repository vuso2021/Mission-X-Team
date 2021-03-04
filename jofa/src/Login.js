import React from 'react';

import './login.css'
import students from './Students.jpg' 
import teachers from './teacher-1.jpg'

// this will all be addded to the hompage and will need to be placed over the top of it 
function LogIn() {
    return (
      <div className ='Login'>
          
          {/* <h1>LOG IN</h1>    */}
        <div className ='StudentLogIn'>
            <img src={students} className ="LogInPic" alt="Students"/>
            <p>Students</p>
            {/* these a tags will be changed to Link once we have added in the newer pages */}
            <a href ='#'>Log In</a> <a href ='#'>Sign Up</a>
            <div className = 'UserInput'>
            <input placeholder ='Email Address'></input>
            <input placeholder = "Password"></input>
            <button>Log In</button>
            </div>
        </div>
        <div className = 'TeacherLogIn'>
        <img src={teachers} className ="LogInPic" alt="Teacher"/>
            <p>Teachers</p>
            {/* these a tags will be changed to Link once we have added in the newer pages */}
            <a href ='#'>Log In</a> <a href ='#'>Sign Up</a>
            <div className = 'UserInput'>
            <input type = 'email' required placeholder ='Email Address'></input>
            <input placeholder = "Password"></input>
            <button>Log In</button>

            </div>
        </div>
      </div>
    )
  }

  export default LogIn
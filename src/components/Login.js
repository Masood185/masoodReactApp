import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

async function loginUser(credentials) {
 return fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
   
}

export default function Login({ setToken }) {
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {

  
   
    if(username=="Admin"&password=="Admin"){
    e.preventDefault();
   
    const token = await loginUser({
      
      username,
      password
    });

    setToken(token);
}else{
    alert("Invalid UserName OR Password");
}
  }
const TxtVal=(e)=>{
  const regex = /[A-Za-z]/;
  function validate(e) {
    const chars = e.target.value.split('');
    const char = chars.pop();
    if (!regex.test(char)) {
      e.target.value = chars.join('');
      console.log(`${char} is not a valid character.`);
    }
  }
  document.querySelector('#myInput').addEventListener('input', validate);
}


  return(
   <div className="limiter">
  <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
    <div className="wrap-login100 p-t-30 p-b-50">
      <span className="login100-form-title p-b-41">
        Account Login
      </span>
      <form className="login100-form validate-form p-b-33 p-t-5" onSubmit={handleSubmit}>
        <div className="wrap-input100 validate-input" data-validate="Enter username">
          {/* <input className="input100" type="text" name="username" placeholder="User name" /> */}
          <input type="text" className="input100" id="myInput" placeholder="User name" onKeyPress={TxtVal}  required onChange={e => setUserName(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Enter password">
          {/* <input className="input100" type="password" name="pass" placeholder="Password" /> */}
          <input type="password" placeholder="Password" required className="input100" onChange={e => setPassword(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="container-login100-form-btn m-t-32">
          <button className="login100-form-btn">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

	
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
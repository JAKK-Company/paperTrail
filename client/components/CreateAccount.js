import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { useMediaQuery } from 'react-responsive';
import "./styling.scss";
// import logo from './logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CreateAccount extends Component {
  constructor(props){
    super(props);
    
    this.state={
      email: '',
      password: ''
    };
    this.funcLogin = this.funcLogin.bind(this);
    this.createNew = this.createNew.bind(this);
  }


  // componentDidMount()

  funcLogin(){
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    // ask if this user can go to next
    const userRequest = JSON.stringify({email: inputEmail, password: inputPassword});
    // console.log(userRequest);
    // do something with response that allows/denies user to move on
    fetch('/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: userRequest
    })
      .then(response => response.json())
      .then(result => result)
      .catch(err => console.log('error sending the request:', err) )
  }

  createNew(){

  }

  render() {

    return (
        <div id='all'>
          <div id='top'>
            <h1>Create Account</h1>
            <img id='logo' src="https://www.vhv.rs/dpng/d/555-5558711_money-bag-dollar-transparent-background-dollar-icon-hd.png"></img>
            </div>
          <form>
              <input type="text" className="form-control" id="inputFullName" aria-describedby="fullNameHelp" placeholder="Full Name"/>
              <input type="text" className="form-control" id="inputUserName" aria-describedby="userNameHelp" placeholder="Username"/>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email Address"/>
              <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" placeholder="Password"/>
              <div>
              <button id="createacc" type="button" className='btn btn-secondary' onClick={() => console.log('Need to send fetch request for new account creation and redirect after successfully creating account')}>Create Account</button>
              </div>
          </form>
        </div>
    );
  }
}



export default CreateAccount;
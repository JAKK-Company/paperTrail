import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { useMediaQuery } from 'react-responsive';
import "./styling.scss";
// import logo from './logo.png';
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    
    this.state={
      email: '',
      password: ''
      //  isFetching:- false,
      // users: []
    }
    this.funcLogin = this.funcLogin.bind(this);
    // this.createNew = this.createNew.bind(this);
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

  // createNew(){

  // }

  render() {

    return (
        <div id='all'>
          <div id='top'>
            <h1>Welcome to PaperTrail</h1>
            <img id='logo' src="https://www.vhv.rs/dpng/d/555-5558711_money-bag-dollar-transparent-background-dollar-icon-hd.png"></img>
            </div>
          <form>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email Address"/>
              <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" placeholder="Password"/>
              <div>
                <button id="log" type="button" className='btn btn-primary' onClick={this.funcLogin}>Login</button>
              </div>
              <Link to="/Users/createAccount">
                <button id="createacc" type="button" className='btn btn-secondary'>Create Account</button>
              </Link>
          </form>
        </div>
    );
  }
}



export default Login;
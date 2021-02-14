import React, { Component } from 'react';
import { render } from 'react-dom';
// import { useMediaQuery } from 'react-responsive';
import "./styling.scss";
// import logo from './logo.png';





class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      email: '',
      password: ''
      //  isFetching:- false,
      // users: []
    }
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
    fetch('/user', {
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
          <h1>Welcome to PaperTrail</h1>
        {/* <div className="logo"> */}
          <img id='logo' src="https://www.vhv.rs/dpng/d/555-5558711_money-bag-dollar-transparent-background-dollar-icon-hd.png"></img>
          </div>
        {/* </div> */}
        <form>
          {/* <div> */}
            {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email Address"/>
          {/* </div>
          <div> */}
            {/* <label htmlFor="inputPassword6" className="col-form-label">Password</label> */}
            <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" placeholder="Password"/>
          {/* </div>*/}
            <div>
              <button id="log" type="button" className='btn btn-primary' onClick={this.funcLogin}>Login</button>
            </div>
            <div>
            <button id="createacc" type="button" className='btn btn-secondary' onClick={this.createNew}>Create Account</button>
            </div>
        </form>
      </div>
    );
  }
}



export default App;
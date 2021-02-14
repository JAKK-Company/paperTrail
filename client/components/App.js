import React, { Component } from 'react';
import { render } from 'react-dom';
import "./styling.scss";




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


  render() {

    return (
      <div id='all'>
        Hello Pink Armadillo! Happy Saturday!
        <div className="logo"><img  src='./logo.png'></img></div>
        <form>
          <div>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
          </div>
          <div>
            <label htmlFor="inputPassword6" className="col-form-label">Password</label>
            <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline"/>
          </div>
          <div>
            <button type="button" className='btn btn-primary' onClick={this.funcLogin}>Login</button>
          </div>
          <div><button type="button" className='btn btn-secondary'>Create Account</button></div>
        </form>
      </div>
    );
  }
}



export default App;
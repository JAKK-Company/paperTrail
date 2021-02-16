import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import { useMediaQuery } from 'react-responsive';
import "./styling.scss";
// import logo from './logo.png';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
//import nickname from models.js => userName;


class Category extends Component {
  constructor(props){
    super(props);

    this.state= {

    };

    this.addCategory = this.addCategory.bind(this);
    this.personalCategory = this.personalCategory.bind(this);
    this.businessCategory = this.businessCategory.bind(this);
  }


addCategory(){
//POST??
}

personalCategory(){
  fetch('personalCategoryExpenses')
  .then(response => response.json())
  .then(data => console.log(data));

}

businessCategory(){
  fetch('businessCategoryExpenses')
  .then(response => response.json())
  .then(data => console.log(data));

}

render() {

    return (
      <div id='all'>
        <div id='top'>
          <h1>Welcome NAME-needs to be imported from user obj!</h1>
        </div>
        <form>
          <Link to="/Users/newCategory">
            <button id="newCat" type="button" className='btn btn-primary' onClick={this.addCategory}>
              <p>Create New Category</p>
            </button>
          </Link>

          <Link to="/Users/expenses">
            <button id="business" type="button" className='btn btn-primary' onClick={this.businessCategory}>
              <img id='logo2' src="https://mpng.subpng.com/20180907/ayq/kisspng-clip-art-financial-management-personal-finance-fin-finance-png-transparent-png-mart-5b927866eaa846.7322777515363257349612.jpg" alt="business expense button"></img>
            </button>

            <button id="personal" type="button" className='btn btn-secondary' onClick={this.personalCategory}>
            <img id='logo3' src="http://www.pngmart.com/files/7/Expense-PNG-Transparent-Image.png" alt="personal expense button"></img>
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

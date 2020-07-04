import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';

import './header.css';
import logo from '../../content/images/header/logo.svg'

export default class Header extends Component {

  render() {
    console.log(this.props)
    return (
      <header className="header">
        <div className="header__description">
          <Link to="/">
            <img className="header__logo" src={logo} alt="website logo"/>
          </Link>
          <Link to="/">
            <div className="logo-title">
              <p id="p-half1">Yourt</p><p id="p-half2">Home</p>
            </div> 
          </Link>
        </div>

        <div className="header__menu">
          <div className="header__menu-1" onClick={this.props.toggleRegistration}>
            <p>Подать заявку</p>
          </div>

          <div className="header__menu-2" onClick={this.props.toggleModal}>
            <p>Войти</p>
          </div>
        </div>
      </header>
    )
  }
}

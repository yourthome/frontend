import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/css/styles.css';
import logo from '../../content/images/header/logo.svg'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__description">
          <img className="header__logo" src={logo} alt="website logo"/>
          <Link to="/flatcard">
            <div className="logo-title">
              <p id="p-half1">Yurt</p><p id="p-half2">Home</p>
            </div> 
          </Link>
        </div>

        <div className="header__menu">
          <Link className="header__menu-1" to='/flatcard'>
            <p>Подать заявку</p>
          </Link>

          <Link className="header__menu-2" to='/flatcard'>
            <p>Войти</p>
          </Link>
        </div>
      </header>
    )
  }
}

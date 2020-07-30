import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logoblue from '../../content/images/header/logo-blue.svg'

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="header__description">
          <Link to="/">
            <img className="header__logo" src={logoblue} alt="website logo"/>
          </Link>
          <Link to="/">
            <div className="logo-title">
              <p id="p-half1">Yourt</p><p id="p-half2">Home</p>
            </div> 
          </Link>
        </div>

        <div className="header__menu">
          <Link to="/registration">
            <div className="header__menu-1">
              <p>Подать заявку</p>
            </div>
          </Link>

          <Link to="/login">
            <div className="header__menu-2">
              <p>Войти</p>
            </div>
          </Link>
        </div>

        {/* <div className="header__menu">
          <div className="header__menu-1" onClick={this.props.toggleRegistration}>
            <p>Подать заявку</p>
          </div>

          <div className="header__menu-2" onClick={this.props.toggleModal}>
            <p>Войти</p>
          </div>
        </div> */}
      </header>
    )
  }
}

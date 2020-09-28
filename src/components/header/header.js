import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

import './header.css';
import logoblue from '../../content/images/header/plain-logo-blue.svg'
import logoyellow from '../../content/images/header/plain-logo-yellow.svg'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    return (
      <header className="header">
        <div className="header__description">
          <Link to="/">
            <img id="header-logo-1" src={logoyellow} alt="website logo"/>
            <img id="header-logo-2" src={logoblue} alt="website logo" />
          </Link>
          <Link to="/">
            <div className="logo-title">
              <p id="p-half1">Yourt</p><p id="p-half2">Home</p>
            </div> 
          </Link>
        </div>

        {userInfo==null ? 
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
          </div> : 
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
              <img id="header-user-image" src={require(`../../content/images/user/no-avatar-300x300.jpg`)} alt="img"></img>
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-default">
              {/* <MDBDropdownItem href="/user">Мой профиль</MDBDropdownItem> */}
              <Link to="/user">Мой профиль</Link>
              <Link to="/login">Выйти</Link>
              {/* <MDBDropdownItem href="/login">Выйти</MDBDropdownItem> */}
            </MDBDropdownMenu>
          </MDBDropdown>
        }

        {/* <div className="header__menu">
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
        </div> */}

        {/* <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <img id="header-user-image" src={require(`../../content/images/user/alex-harvey.png`)} alt="img"></img>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="/user">My Profile</MDBDropdownItem>
            <MDBDropdownItem href="/login">Logout</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown> */}


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

export default Header;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../header/header';
import Footer from '../../footer/footer';

import filterImg from '../../../content/images/filter/home3.jpg';
import userImage from '../../../content/images/user/alex-harvey.png'
import './profile.css'

export default class Profile extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="user-ads-block">
          <div className="user-ads-card">
            <img src={filterImg} alt="user ads card pic" />
            <div className="user-ads-card-info">
              <h4>Сдаю квартиру в центре Бишкека</h4>
              <p>Отличная квартира в центре Бишкека, со всеми удобствами</p>
              <div className="user-ads-card-price">
                <span>13000c</span>
                <Link to="/mapfilter">
                  <span id="user-ads-maplink">На карте</span>
                </Link>
                <Link to="/user/flatcard">
                  <span>Изменить...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="user-personaldata-block">
          <div className="user-personaldata-cardcontainer">
            <div className="user-personaldata-card">
              <img src={userImage} alt="user profile pic"/>
              <div className="user-personaldata-data">
                <div id="user-personaldata-data-group1">
                  <label>Логин:</label>
                  <p>Бабушка123</p>
                </div>
                <div id="user-personaldata-data-group2">
                  <label>Почта:</label>
                  <p>grandma@gmail.com</p>
                </div>
                <div id="user-personaldata-data-group3">
                  <label>Пароль:</label>
                  <p>Бабу***777</p>
                </div>
              </div>
            </div>
            <button id="user-personaldata-button">Изменить</button>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

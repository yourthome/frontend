import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import facebook from '../../content/images/footer/facebook.svg';
import instagram from '../../content/images/footer/instagram.svg';
import whatsapp from '../../content/images/footer/whatsapp.svg';

// import {ReactComponent as Facebook} from '../content/images/footer/facebook.svg';
// import {ReactComponent as Instagram} from '../content/images/footer/instagram.svg';
// import {ReactComponent as Whatsapp} from '../content/images/footer/whatsapp.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        
        <div className="footer__icons">
          <p>Следите за нами в:</p>
          <Link to="/flatcard">
            {/* <Facebook width="40px"/> */}
            <img className="footer__logo" src={facebook} alt="facebook logo"/>
          </Link>
          <Link to="/flatcard">
            {/* <Instagram width="40px"/> */}
            <img className="footer__logo" src={instagram} alt="instagram logo"/>
          </Link>
          <Link to="/flatcard">
            {/* <Whatsapp width="40px"/> */}
            <img className="footer__logo" src={whatsapp} alt="whatsapp logo"/>
          </Link>
        </div>

        <div className="footer__group">
          <div className="footer__group-links">
            <Link to='/flatcard'>
              <p>Карта</p>
            </Link>

            <Link to='/flatcard'>
              <p>Фильтр</p>
            </Link>

            <Link to='/flatcard'>
              <p>Войти</p>
            </Link>

            <Link to='/flatcard'>
              <p>Заявка</p>
            </Link>
          </div>
          <div className="footer-button">
            <Link className="footer-button-link" to='/flatcard'>
              <p>Подать объявление</p>
            </Link>
          </div>
        </div>

      </footer>
    )
  }
}

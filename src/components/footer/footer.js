import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.css';
import facebook from '../../content/images/footer/facebook.svg';
import instagram from '../../content/images/footer/instagram.svg';
import whatsapp from '../../content/images/footer/whatsapp.svg';

export default class Footer extends Component {
  render() {
    const { 
      toggleModal, 
      // toggleRentalForm 
    } = this.props
    return (
      <footer className="footer">
        
        <div className="footer__icons">
          {/* <p>Следите за нами в:</p> */}
          {/* <Link to="/"> */}
            {/* <Facebook width="40px"/> */}
            {/* <img className="footer__logo" src={facebook} alt="facebook logo"/> */}
          {/* </Link> */}
          {/* <Link to="/"> */}
            {/* <Instagram width="40px"/> */}
            {/* <img className="footer__logo" src={instagram} alt="instagram logo"/> */}
          {/* </Link> */}
          {/* <Link to="/"> */}
            {/* <Whatsapp width="40px"/> */}
            {/* <img className="footer__logo" src={whatsapp} alt="whatsapp logo"/> */}
          {/* </Link> */}
        </div>

        <div className="footer__group">
          <div className="footer__group-links">
            <Link to='/mapfilter'>
              <p>Карта</p>
            </Link>

            <Link to='/filter'>
              <p>Фильтр</p>
            </Link>

            <Link to='/' onClick={toggleModal}>
              <p>Войти</p>
            </Link>

            <Link to='/'>
              <p>Заявка</p>
            </Link>
          </div>
          <div className="footer-button">
            <Link className="footer-button-link" to='/add-rental'>
              <p>Подать объявление</p>
            </Link>
          </div>
        </div>

      </footer>
    )
  }
}

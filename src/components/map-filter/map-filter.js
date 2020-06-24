import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import MapContainer from '../map/map'

import './map-filter.css'
import logo from '../../content/images/header/logo.svg'

export default class MapFilter extends Component {
  render() {
    return (
      <>
        <header className="map-filter-header">
          <div className="map-filter-header__description">
            <Link to="/">
              <img className="map-filter-header__logo" src={logo} alt="website logo"/>
            </Link>
          </div>

          <div className="map-filter-header__input-group">
            <input placeholder="Где вы хотите снять жильё..."></input>
            <button id="map-filter-header__input-group-button">Найти</button>
          </div>

          <div className="map-filter-header__menu">
            <Link className="map-filter-header__menu-1" to='/mapfilter'>
              <p>Подать заявку</p>
            </Link>

            {/* <Link className="map-filter-header__menu-2" to='/mapfilter'>
              <p>Войти</p>
            </Link> */}
          </div>
        </header>
        <div className="map-filter-container">
          <div className="map-filter-container-left">

          </div>
          <MapContainer />
        </div>
        
      </>
    )
  }
}

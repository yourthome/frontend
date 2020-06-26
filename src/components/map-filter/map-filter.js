import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import MapContainer from '../map/map'
import Footer from '../footer/footer'

import './map-filter.css'
import logo from '../../content/images/header/logo.svg'
import arrow from '../../content/images/filter/next.png'

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

        <section className="map-filter-container">
          <div className="map-filter-container-left">

            <div className="map-filter-lists">

              <ul className="map-filter-lists-group">
                <li>Город
                  <ul>
                    <li>Бишкек</li>
                    <li>Нарын</li>
                    <li>Чуй</li>
                    <li>Талас</li>
                    <li>Ысык-куль</li>
                    <li>Ош</li>
                    <li>Жалал-Абад</li>
                    <li>Баткен</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
                <li>Тип недвижимости
                  <ul>
                    <li>Участок</li>
                    <li>Квартира</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
              </ul>

              <ul className="map-filter-lists-group">
                <li>Этаж
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
                <li>Этажность
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
              </ul>

              <ul className="map-filter-lists-group">
              <li>Кол-во комнат
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
                <li>Площадь
                  <ul>
                    <li>&#62;50м2</li>
                    <li>&#62;60м2</li>
                    <li>&#62;70м2</li>
                    <li>&#62;80м2</li>
                    <li>&#62;90м2</li>
                    <li>&#62;100м2</li>
                    <li>&#62;110м2</li>
                    <li>&#62;120м2</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
              </ul>

              <ul className="map-filter-lists-group">
                <li>Рядом есть
                  <ul>
                    <li>Рестораны, кафе</li>
                    <li>Детский сад</li>
                    <li>Стоянка</li>
                    <li>Остановки</li>
                    <li>Супермаркет</li>
                    <li>Парк</li>
                    <li>Зелёная зона</li>
                    <li>Больница</li>
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
                <li>Тип строения
                  <ul>
                    <li>Кирпичное</li>
                    <li>Монолитное</li>
                    <li>Бетонное</li>
                    <li>Панельные</li> 
                    <li>Деревянное</li> 
                  </ul>
                  <img src={arrow} alt="arrow" />
                </li>
              </ul>

            </div>

          </div>
          <MapContainer />
        </section>

        <Footer />
        
      </>
    )
  }
}

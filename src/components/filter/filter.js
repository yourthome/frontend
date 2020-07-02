import React, {Component} from 'react';
import Header from '../header/header';
import './filter.css';
import arrow from '../../content/images/filter/next.png'
import { Link } from 'react-router-dom';
import filterImg from '../../content/images/filter/home3.jpg';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';




export default class Filter extends Component {
    state = {
        isModalOpen: false,
        isRegistrationOpen: false
    };

    toggleModal = () =>{
        this.setState(state => ({ isModalOpen: !state.isModalOpen}));
    };

    toggleRegistration = () =>{
        this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
    };

    toggleModalWindows = () =>{
        this.setState(state => ({ isModalOpen: !state.isModalOpen}));
        this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
    }

    render() {
      return( 
<>
        <Header toggleModal = {this.toggleModal} toggleRegistration = {this.toggleRegistration}/>
        {this.state.isModalOpen &&
        <LogIn onClose={this.toggleModal} onToggleWindows={this.toggleModalWindows}></LogIn>}
        {this.state.isRegistrationOpen &&
        <Registration onClose={this.toggleRegistration} onToggleWindows={this.toggleModalWindows}></Registration>}
        <div className="search__block__filter">
        <input type="text" placeholder="Где вы хотите снять жильё..." />
        <button className="btn__yellow">Найти</button>
    </div>
    <div className="filter__block">
        <ul className="main_filter">
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
        </ul>
        <ul className="main_filter">
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
        </ul>
        <ul className="main_filter">
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
        </ul>
    </div>
    <div className="ads__block__filter">
        <div className="ads__card__filter">
            <img src={filterImg} alt="image"></img>
            <div className="ads__info__filter">
                <h4>Сдаю квартиру в центре Бишкека</h4>
                <p>Отличная квартира в центре Бишкека, со всеми удобствами</p>
                <div className="ads__price__block">
                    <span>13000c</span>
                    <Link to="/mapfilter">
                    <span id="ads__link__map">На карте</span>
                    </Link>
                    <Link to="/flatcard">
                    <span>Подробнее..</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</>
      )}}
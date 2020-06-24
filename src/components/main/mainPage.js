import React, {Component} from 'react';
import './mainPage.css';
import logo from '../../content/images/main/logo.png'
import adsImg from '../../content/images/main/ads-card.jpg'
import faceIcon from '../../content/images/main/facebook.png'
import instaIcon from '../../content/images/main/instagram.png'
import whatsIcon from '../../content/images/main/whatsapp.png'
import { Link } from 'react-router-dom';



export default class MainPage extends Component {
    render() {
      return( 
      <>
            <section className="intro">
                <header>
                    <img src={logo} alt="logo"/>
                    <div className="header__btns">
                        <button className="btn__blue">Подать заявку</button>
                        <button className="btn__yellow">Войти</button>
                    </div>
                </header>
                <h1>Найдите лучший дом для себя</h1>
                <div className="search__block">
                    <input type="text" placeholder="Где вы хотите снять жильё..." />
                    <Link to="/filter">
                    <button className="btn__blue">Найти</button>
                    </Link>
                </div>
                <Link to="/mapfilter">
                <button className="btn__yellow onMap">Найти на карте</button>
                </Link>
            </section>
            <section className="ads__section">
                <h2>Недавние обьявления</h2>
                <div className="ads__blocks">
                <Link to="/flatcard">               
                    <div className="ads__block">
                        <img src={adsImg} alt="img"/>
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                 </div></Link>  
<Link to="/flatcard">
                    <div className="ads__block">
                        <img src={adsImg} alt="img"/>
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                    </div></Link>
<Link to="/flatcard">
                    <div className="ads__block">
                        <img src={adsImg} alt="img"/>
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                    </div></Link>
<Link to="/flatcard">
                    <div className="ads__block">
                        <img src={adsImg} alt="img"/>
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                    </div></Link>
<Link to="/flatcard">
                    <div className="ads__block">
                        <img src={adsImg} alt="img" />
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                    </div></Link>
                    <Link to="/flatcard">
                    <div className="ads__block">
                        <img src={adsImg} alt="img" />
                        <span>Сдаю 3-х комнатную квартиру.</span>
                        <div className="ads__price">
                            <span>13000c</span>
                            <Link to="/mapfilter">
                            <span>На карте</span>
                            </Link>
                        </div>
                    </div>
             </Link>  
             </div> 
                <button>Ещё +</button>
            </section>
            <footer>
                <div className="social">
                    <span>Следите за нами:</span>
                    <div className="social__icons">
                        <img src={faceIcon} alt="logo"/>
                        <img src={instaIcon} alt="logo"/>
                        <img src={whatsIcon} alt="logo"/>
                    </div>
                </div>
                <div className="footer__nav">
                    <div className="footer__menu">
                        <Link to="/mapfilter"><span>Карта</span></Link>
                        <Link to=""><span>Фильтр</span></Link>
                        <Link to=""><span>Войти</span></Link>
                        <Link to=""><span>Заявка</span></Link>
                    </div>
                    <button className="btn__yellow">Подать обьявление</button>
                </div>
                    </footer>
      </>
      );
    }
  }

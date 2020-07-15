import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './logIn.css';
import bgcImg from '../../content/images/main/enterImg.jpg'
import faceIcon from '../../content/images/main/facebook.png';
import instaIcon from '../../content/images/main/instagram.png';
import whatsIcon from '../../content/images/main/whatsapp.png';



export default class LogIn extends Component{


    render(){

        return(
            <>
                {ReactDOM.createPortal(
                    <div>
                        <div className="modal--overlay" onClick={this.props.onClose}>
                            <span className="modal__cross__icon"></span>
                        </div>
                        <div className="modal--content">
                            <img src={bgcImg} alt="img"></img>
                            <div className="modal__form__block">
                                <h3>Вход</h3>
                                <form>
                                    <input placeholder="Логин"></input>
                                    <input placeholder="Пароль"></input>
                                    <button type="submit">Войти</button>
                                </form>
                                <h4>Войти через:</h4>
                                <div className="modal__form__social">
                                    <img src={faceIcon} alt="icon"></img>
                                    <img src={instaIcon} alt="icon"></img>
                                    <img src={whatsIcon} alt="icon"></img>
                                </div>
                                <h4 onClick={this.props.onToggleWindows} className="modal__registration__string"
                                >Зарегистрироваться?</h4>
                            </div>  
                        </div>
                    </div>,
                    document.getElementById('portal')
                )}
            </>
        )
    }
}




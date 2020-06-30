import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import bgcImg from '../../content/images/main/enterImg.jpg';


export default class Registration extends Component{
    

    render(){
        return(
            <>
                {ReactDOM.createPortal(
                    <div>
                        <div className="modal--overlay" onClick={this.props.onClose}>
                        </div>
                        <div className="modal--content">
                            <img src={bgcImg}></img>
                            <div className="modal__form__block">
                                <h3>Регистрация</h3>
                                <form>
                                    <input placeholder="Имя"></input>
                                    <input placeholder="Пароль"></input>
                                    <input placeholder="Повторите пароль"></input>
                                    <button type="submit">Отправить</button>
                                </form>
                                <h4 className="modal__registration__string" onClick={this.props.onToggleWindows}>Уже зарегистрированы?</h4>
                            </div>
                        </div>
                    </div>
                ,document.getElementById('portal'))}
            
            </>
        )
    }
}
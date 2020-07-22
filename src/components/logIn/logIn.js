import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './logIn.css';
import bgcImg from '../../content/images/main/enterImg.jpg'
import faceIcon from '../../content/images/main/facebook.png';
import instaIcon from '../../content/images/main/instagram.png';
import whatsIcon from '../../content/images/main/whatsapp.png';

import { userActions } from '../../redux/auth_redux/_actions';

class LogIn extends Component {

  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
        username: '',
        password: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
        this.props.login(username, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return(
      <>
        {ReactDOM.createPortal(
          <div className="modal-window-container">
            <div className="modal--overlay" onClick={this.props.onClose}>
              <span className="modal__cross__icon"></span>
            </div>
            <div className="modal--content">
              <img src={bgcImg} alt="img"></img>
              <div className="modal__form__block">
                <h3>Вход</h3>

                <form onSubmit={this.handleSubmit}>

                  <div className={"logIn-input-group-1" + (submitted && !username ? ' has-error' : '')}>
                    <input name="username" value={username} onChange={this.handleChange} placeholder="Логин"></input>
                    {submitted && !username &&
                      <div className="help-block">Username is required</div>
                    }
                  </div>

                  <div className={"logIn-input-group-2" + (submitted && !password ? ' has-error' : '')}>
                    <input name="password" value={password} onChange={this.handleChange} placeholder="Пароль"></input>
                    {submitted && !password &&
                      <div className="help-block">Password is required</div>
                    }
                  </div>

                  <button type="submit">Войти</button>
                  {loggingIn &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  }
                </form>

                <h4>Войти через:</h4>
                <div className="modal__form__social">
                  <img src={faceIcon} alt="icon"></img>
                  <img src={instaIcon} alt="icon"></img>
                  <img src={whatsIcon} alt="icon"></img>
                </div>
                <h4 onClick={this.props.onToggleWindows} className="modal__registration__string">Зарегистрироваться?</h4>
              </div>  
            </div>
          </div>,
          document.getElementById('portal')
          )}
      </>
    )
  }
}


const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const mapDispatchToProps = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

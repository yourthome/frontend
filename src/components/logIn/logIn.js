import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './logIn.css';
import bgcImg from '../../content/images/main/enterImg.jpg'
import logoyellow from '../../content/images/header/logo-yellow.svg'

import { userActions } from '../../redux/auth_redux/_actions';
import { Redirect, Link } from 'react-router-dom';

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
        {/* {ReactDOM.createPortal( */}
          <div className="login-bg">
          </div>
            {/* <div className="modal--overlay" onClick={this.props.onClose}>
              <span className="modal__cross__icon"></span>
            </div> */}
          <div className="modal--content">
            <img src={bgcImg} alt="img"></img>
            <div className="modal__form__block">
              <Link to='/'><img src={logoyellow} alt="main logo link"></img></Link>
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
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="login modal pic" />
                  // <Redirect to='/user' />
                }
              </form>
              {/* <h4 onClick={this.props.onToggleWindows} className="modal__registration__string">Зарегистрироваться?</h4> */}
              <h4 className="modal__registration__string">
                <Link to="/registration">Зарегистрироваться?</Link>
              </h4>
            </div>  
          </div>
          
          {/* ,document.getElementById('portal')
        )} */}
      </>
    )
  }
}


const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return { 
    loggingIn
  };
}

const mapDispatchToProps = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

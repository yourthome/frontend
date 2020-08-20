import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import './logIn.css';
import bgcImg from '../../content/images/main/enterImg.jpg'
import logoyellow from '../../content/images/header/logo-yellow.svg'

import { userActions } from '../../redux/auth_redux/_actions';
import { Link } from 'react-router-dom';
// import { history } from '../../redux/auth_redux/_helpers/history';

class LogIn extends Component {

  constructor(props) {
    super(props);

    // reset login status
    this.props.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false,
      hidden: true
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

  toggleShowPassword = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { loggingIn, loggedIn } = this.props;
    const { username, password, submitted } = this.state;

    // if(loggedIn) { return <Redirect to="/user" /> }
    
    return(
      <>
        {/* {ReactDOM.createPortal( */}
          <div className="login-bg">
          </div>
          <Link to='/'><div className="modal__cross__icon"></div></Link>
            {/* <div className="modal--overlay" onClick={this.props.onClose}>
              <span className="modal__cross__icon"></span>
            </div> */}
          <div className="modal--content">
            <img src={bgcImg} alt="img"></img>
            <div className="modal__form__block">
              <Link to='/'><img src={logoyellow} alt="main logo link"></img></Link>
              <h3>Вход</h3>

              <form className="login-form" onSubmit={this.handleSubmit}>

                <div className={"logIn-input-group-1" + (submitted && !username ? ' has-error' : '')}>
                  <input name="username" value={username} onChange={this.handleChange} placeholder="Логин"></input>
                  {submitted && !username &&
                    <div className="help-block">Укажите Логин</div>
                  }
                </div>

                <div className={"logIn-input-group-2" + (submitted && !password ? ' has-error' : '')}>
                  <input name="password" value={password} onChange={this.handleChange} type={this.state.hidden ? "password" : "text"} placeholder="Пароль"></input>
                  {submitted && !password &&
                    <div className="help-block">Укажите пароль</div>
                  }
                </div>

                <button id="login-button" type="submit">Войти</button>
                {loggingIn &&
                  <i className="fa fa-spinner fa-spin"></i>
                }
                <button id="hide-show-button-auth" onClick={this.toggleShowPassword}><i className="fa fa-eye" aria-hidden="true"></i></button>
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
  const { loggingIn,loggedIn } = state.authentication;
  return { 
    loggingIn, loggedIn
  };
}

const mapDispatchToProps = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

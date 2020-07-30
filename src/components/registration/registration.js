import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import bgcImg from '../../content/images/main/enterImg.jpg';
import logoyellow from '../../content/images/header/logo-yellow.svg'

import './registration.css'
import { userActions } from '../../redux/auth_redux/_actions';
import { Link } from 'react-router-dom';

class Registration extends Component{
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        gender: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }
  
  render() {
    const { registering  } = this.props;
    const { user, submitted } = this.state;
    return(
      <>
        {/* {ReactDOM.createPortal( */}
          <div className="reg-bg">
          </div>

          {/* <div className="modal--overlay" onClick={this.props.onClose}>
            <span className="modal__cross__icon"></span>
          </div> */}
            
          <div className="reg-modal--content">
            <img src={bgcImg} alt="modal-window-art"></img>
            <div className="modal__form__block">
              <Link to="/"><img src={logoyellow} alt="logo for login"></img></Link>
              <h3>Регистрация</h3>
              <form onSubmit={this.handleSubmit}>

                <div className={"reg-input-group-1" + (submitted && !user.firstName ? ' has-error' : '')}>
                  <input name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="Имя"></input>
                  {submitted && !user.firstName &&
                    <div className="help-block">First Name is required</div>
                  }
                </div>

                <div className={"reg-input-group-2" + (submitted && !user.lastName ? ' has-error' : '')}>
                  <input name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Фамилия"></input>
                  {submitted && !user.lastName &&
                    <div className="help-block">Last Name is required</div>
                  }
                </div>
                  
                
                <div className={"reg-input-group-3"  + (submitted && !user.username ? ' has-error' : '')}>
                  <input name="username" value={user.username} onChange={this.handleChange} placeholder="Логин"></input>
                  {submitted && !user.username &&
                    <div className="help-block">Username is required</div>
                  }
                </div>

                <div className={"reg-input-group-4" + (submitted && !user.password ? ' has-error' : '')}>
                  <input name="password" value={user.password} onChange={this.handleChange} placeholder="Пароль"></input>
                  {submitted && !user.password &&
                    <div className="help-block">Password is required</div>
                  }
                </div>

                <div className={"reg-input-group-5" + (submitted && !user.phone ? ' has-error' : '')}>
                  <input name="phone" value={user.phone} onChange={this.handleChange} placeholder="Номер телефона"></input>
                  {submitted && !user.phone &&
                    <div className="help-block">Phone is required</div>
                  }
                </div>

                <div className={"reg-input-group-6" + (submitted && !user.email ? ' has-error' : '')}>
                  <input name="email" value={user.email} onChange={this.handleChange} placeholder="Email"></input>
                  {submitted && !user.email &&
                    <div className="help-block">Email is required</div>
                  }
                </div>

                <div className={"reg-input-group-7" + (submitted && !user.gender ? ' has-error' : '')}>
                  <input name="gender" value={user.gender} onChange={this.handleChange} placeholder="Пол"></input>
                  {submitted && !user.gender &&
                    <div className="help-block">Gender is required</div>
                  }
                </div>

                <button type="submit">Отправить</button>
                {registering && 
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="register loader"/>
                }

              </form>
              {/* <h4 className="modal__registration__string" onClick={this.props.onToggleWindows}>Уже зарегистрированы?</h4> */}
              <h4 className="modal__registration__string"><Link to="/login">Уже зарегистрированы?</Link></h4>
            </div>
          </div>
        {/* ,document.getElementById('portal'))} */}
      </>
    )
  }
}

const mapStateToProps = state => {
  const { registering } = state.registration;
  return { registering }
}

const mapDispatchToProps = {
  register: userActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
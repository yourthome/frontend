import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import bgcImg from '../../content/images/main/enterImg.jpg';
import logoyellow from '../../content/images/header/logo-yellow.svg'

import './registration.css'
import { userActions } from '../../redux/auth_redux/_actions';
import { Link } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
        gender: null
      },
      submitted: false,
      hidden: true
    };

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  handleGender = (event) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user, 
        gender: event.target.value
      }
    })
  }

  toggleShowPassword = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  pushIfRegisteredIn = () => {
    if(this.props.registered) { 
      this.props.history.push(`/login`);
    } 
  }
  
  render() {
    const { registering, registered  } = this.props;
    const { user, submitted } = this.state;
    return(
      <>
        {/* {ReactDOM.createPortal( */}
          <div className="reg-bg">
          </div>
          <Link to='/'><div className="modal__cross__icon"></div></Link>
          {/* <div className="modal--overlay" onClick={this.props.onClose}>
            <span className="modal__cross__icon"></span>
          </div> */}
            
          <div className="reg-modal--content">
            {/* <img src={bgcImg} alt="modal-window-art"></img> */}
            <div className="reg-modal__form__block">
              <Link to="/"><img src={logoyellow} alt="logo for login"></img></Link>
              <h3>Регистрация</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="reg-inputs-1">
                  <div className={"reg-input-group-1" + (submitted && !user.firstName ? ' has-error' : '')}>
                    <input name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="Имя"></input>
                    {submitted && !user.firstName &&
                      <div className="help-block">Укажите Имя</div>
                    }
                  </div>

                  <div className={"reg-input-group-2" + (submitted && !user.lastName ? ' has-error' : '')}>
                    <input name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Фамилия"></input>
                    {submitted && !user.lastName &&
                      <div className="help-block">Укажите Фамилию</div>
                    }
                  </div>
                </div>  
                <div className="reg-inputs-1">
                  <div className={"reg-input-group-3"  + (submitted && !user.username ? ' has-error' : '')}>
                    <input name="username" value={user.username} onChange={this.handleChange} placeholder="Логин"></input>
                    {submitted && !user.username &&
                      <div className="help-block">Укажите Логин</div>
                    }
                  </div>

                  <div className={"reg-input-group-4" + (submitted && !user.password ? ' has-error' : '')}>
                    <input name="password" value={user.password} onChange={this.handleChange} type={this.state.hidden ? "password" : "text"} placeholder="Пароль"></input>
                    {submitted && !user.password &&
                      <div className="help-block">Укажите пароль</div>
                    }
                  </div>
                </div>
                <div className="reg-inputs-1">
                  <div className={"reg-input-group-5" + (submitted && !user.phone ? ' has-error' : '')}>
                    <input name="phone" value={user.phone} onChange={this.handleChange} placeholder="Номер телефона"></input>
                    {submitted && !user.phone &&
                      <div className="help-block">Укажите номер телефона</div>
                    }
                  </div>

                  <div className={"reg-input-group-6" + (submitted && !user.email ? ' has-error' : '')}>
                    <input name="email" value={user.email} onChange={this.handleChange} placeholder="Email"></input>
                    {submitted && !user.email &&
                      <div className="help-block">Укажите почту</div>
                    }
                  </div>
                </div>

                <FormControl component="fieldset">
                  <FormLabel component="legend">Пол</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={user.gender} onChange={this.handleGender}>
                    <FormControlLabel value={'0'} control={<Radio />} label="Мужчина" />
                    <FormControlLabel value={'1'} control={<Radio />} label="Женщина" />
                  </RadioGroup>
                  {submitted && !user.gender &&
                    <div className="help-block">Укажите пол</div>
                  }
                </FormControl>

                {this.pushIfRegisteredIn()}
                <button type="submit">Отправить</button>
                {registering && 
                  <i className="fa fa-spinner fa-spin"></i>
                }

              </form>
              <button id="hide-show-button-reg" onClick={this.toggleShowPassword}><i className="fa fa-eye" aria-hidden="true"></i></button>
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
  const { registering, registered } = state.registration;
  return { registering, registered }
}

const mapDispatchToProps = {
  register: userActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
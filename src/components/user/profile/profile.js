import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../header/header';
import Footer from '../../footer/footer';

import { userActions } from '../../../redux/auth_redux/_actions'

import filterImg from '../../../content/images/filter/home3.jpg';
import userImage from '../../../content/images/user/alex-harvey.png'
import './profile.css'

class Profile extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    return (
      <>
        <Header />
        
        <div className="col-md-6 col-md-offset-3">
          <h1>Hi {user.firstName}!</h1>
          <p>You're logged in!</p>
          <h3>All registered users:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
          {users.items &&
            <ul>
              {users.items.map((user, index) =>
                <li key={user.id}>
                  {user.firstName + ' ' + user.lastName}
                  {
                    user.deleting ? <em> - Deleting...</em>
                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                  }
                </li>
              )}
            </ul>
          }
          <p>
            <Link to="/login">Logout</Link>
          </p>
        </div>

        <div className="user-ads-block">
          <div className="user-ads-card">
            <img src={filterImg} alt="user ads card pic" />
            <div className="user-ads-card-info">
              <h4>Сдаю квартиру в центре Бишкека</h4>
              <p>Отличная квартира в центре Бишкека, со всеми удобствами</p>
              <div className="user-ads-card-price">
                <span>13000c</span>
                <Link to="/mapfilter">
                  <span id="user-ads-maplink">На карте</span>
                </Link>
                <Link to="/user/flatcard">
                  <span>Изменить...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="user-personaldata-block">
          <div className="user-personaldata-cardcontainer">
            <div className="user-personaldata-card">
              <img src={userImage} alt="user profile pic"/>
              <div className="user-personaldata-data">
                <div id="user-personaldata-data-group1">
                  <label>Логин:</label>
                  <p>Бабушка123</p>
                </div>
                <div id="user-personaldata-data-group2">
                  <label>Почта:</label>
                  <p>grandma@gmail.com</p>
                </div>
                <div id="user-personaldata-data-group3">
                  <label>Пароль:</label>
                  <p>Бабу***777</p>
                </div>
              </div>
            </div>
            <button id="user-personaldata-button">Изменить</button>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const mapDispatchToProps = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
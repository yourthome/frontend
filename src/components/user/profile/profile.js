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
    this.props.getUserRentals();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    let rentals = this.props.rentals;
    console.log(rentals);
    return (
      <>
        <Header />
        
        <div className="user-personaldata-block">
          <div className="user-personaldata-cardcontainer">
            <div className="user-personaldata-card">
              <img src={userImage} alt="user profile pic"/>
              <div className="user-personaldata-data">
                <div id="user-personaldata-data-group1">
                  <label>Имя:</label>
                  <p>{user.firstName}</p>
                </div>
                <div id="user-personaldata-data-group2">
                  <label>Фамилия:</label>
                  <p>{user.lastName}</p>
                </div>
                <div id="user-personaldata-data-group3">
                  <label>Логин:</label>
                  <p>{user.username}</p>
                </div>
                <div id="user-personaldata-data-group4">
                  <label>Пароль:</label>
                  <p>{user.password}</p>
                </div>
                <div id="user-personaldata-data-group5">
                  <label>Телефон:</label>
                  <p>{user.phone}</p>
                </div>
                <div id="user-personaldata-data-group6">
                  <label>Почта:</label>
                  <p>{user.email}</p>
                </div>
                <div id="user-personaldata-data-group7">
                  <label>Пол:</label>
                  <p>{user.gender}</p>
                </div>
              </div>
            </div>
            <div className="user-personaldata-buttons">
              <Link id="user-logout-link" to="/login">
                <button id="user-logout-button">
                  Logout
                </button>
              </Link>
              <button id="user-personaldata-button">Изменить</button>
              { user.username==="adminbratan" ? 
              <Link id="admin-panel-link" to="/admin-panel">
                <button id="admin-panel-button">
                  Админ
                </button>
              </Link> : <div></div>
              }
            </div>
          </div>
        </div>  

        <div className="user-ads-block">
          <p id="user-ads-title">Мои объявления</p>
          {
            rentals ? rentals.map(elem => {
              return(             
                <div key={elem.rentalID} className="user-ads-card">
                  <img src={filterImg} alt="user ads card pic" />
                  <div className="user-ads-card-info">
                    <h4>{elem.description}</h4>
                    <p>Отличная квартира в центре Бишкека, со всеми удобствами</p>
                    <div className="user-ads-card-price">
                      <span>{elem.cost}</span>
                      <Link to="/mapfilter">
                        <span id="user-ads-maplink">На карте</span>
                      </Link>
                      <Link to="/user/flatcard">
                        <span>Изменить...</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }) : <div>Загрузка</div>
          }
        </div>

        {/* <div className="user-admin-users-list">
          <h3>All registered users:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && <span className="text-danger">ERROR: {users.error}</span>}
          {users.items &&
          <ul className="users-list">
            {users.items.map((user) =>
              <li key={user.id}>
                {user.firstName + ' ' + user.lastName}
                {
                  user.deleting ? <em> - Deleting...</em>
                  : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                  : <span> - <Link onClick={this.handleDeleteUser(user.id)}>Delete</Link></span>
                }
              </li>
            )}
          </ul>
          }
        </div> */}

        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  const { users, authentication } = state;
  const { user } = authentication;
  return { 
    user, 
    users,
    rentals: state.getUserRentalsData.rentals
  };
}

const mapDispatchToProps = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
  getUserRentals: userActions.getUserRentals
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
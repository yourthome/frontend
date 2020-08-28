import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../../header/header';
import Footer from '../../footer/footer';

import { userActions } from '../../../redux/auth_redux/_actions'
import { authHeader } from '../../../redux/auth_redux/_helpers/auth-header';

import filterImg from '../../../content/images/filter/home3.jpg';
import noPhoto from '../../../content/images/main/no_photo.jpg'
import userImage from '../../../content/images/user/alex-harvey.png'
import './profile.css'

class Profile extends Component {

  componentDidMount() {
    this.props.getUsers();
    this.props.getUserRentals();
  }

  // handleDeleteUser(id) {
  //   return (e) => this.props.deleteUser(id);
  // }

  removeRental = id =>{
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    fetch(`https://yourthometest.herokuapp.com/PersonalPage/deleteRental/${id}`, requestOptions).then(() => {
      this.props.getUserRentals();
    })
  }

  render() {
    const { user, users } = this.props;
    let rentals = this.props.rentals;
    // console.log(rentals);
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
                {/* <div id="user-personaldata-data-group4">
                  <label>Пароль:</label>
                  <p>{user.password}</p>
                </div> */}
                <div id="user-personaldata-data-group5">
                  <label>Телефон:</label>
                  <p>{user.phone}</p>
                </div>
                {/* <div id="user-personaldata-data-group6">
                  <label>Почта:</label>
                  <p>{user.email}</p>
                </div> */}
                {/* <div id="user-personaldata-data-group7">
                  <label>Пол:</label>
                  <p>{user.gender}</p>
                </div> */}
              </div>

              {/* <div className="user-personaldata-data">
                <div id="user-personaldata-data-group1">
                  <label>Имя:</label>
                  <input value={user.firstName}></input>
                </div>
                <div id="user-personaldata-data-group2">
                  <label>Фамилия:</label>
                  <input value={user.lastName}></input>
                </div>
                <div id="user-personaldata-data-group3">
                  <label>Логин:</label>
                  <input value={user.username}></input>
                </div>
                <div id="user-personaldata-data-group4">
                  <label>Пароль:</label>
                  <input value={user.password}></input>
                </div>
                <div id="user-personaldata-data-group5">
                  <label>Телефон:</label>
                  <input value={user.phone}></input>
                </div>
                <div id="user-personaldata-data-group6">
                  <label>Почта:</label>
                  <input value={user.email}></input>
                </div>
                <div id="user-personaldata-data-group7">
                  <label>Пол:</label>
                  <input value={user.gender}></input>
                </div>
              </div> */}

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
              return(elem.photos &&             
                <div key={elem.rentalID} className="user-ads-card">
                  <img src={elem.photos[0] === undefined ? noPhoto : elem.photos[0].path} alt="user ads card pic" />
                  <div className="user-ads-card-info">
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                    <div className="user-ads-card-price">
                      <span>{elem.cost}c | {Math.floor(elem.cost / 77.8)}$</span>
                      <div className="user-ads-card-control">
                        <Link to="/mapfilter">
                          <span id="user-ads-maplink">На карте</span>
                        </Link>
                        <Link to={`/user/flatcard/${elem.rentalID}`}>
                          <span>Подробнее</span>
                        </Link>
                        <Link onClick={() => this.removeRental(elem.rentalID)}>
                          <span style={{color: "red"}}>Удалить</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : <div>Загрузка</div>
          }
        </div>

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
  // deleteUser: userActions.delete,
  getUserRentals: userActions.getUserRentals
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
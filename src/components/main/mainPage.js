import React, { Component } from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';
import Header from '../header/header';
import Footer from '../footer/footer';

import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions/actions';
import { getCardId } from '../../redux/actions/actions';

import adsImg from '../../content/images/main/ads-card.jpg'

class MainPage extends Component {
  state = {
    isModalOpen: false,
    isRegistrationOpen: false
  };

  toggleModal = () =>{
    this.setState(state => ({ isModalOpen: !state.isModalOpen}));
  };

  toggleRegistration = () =>{
    this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
  };

  toggleModalWindows = () =>{
    this.setState(state => ({ isModalOpen: !state.isModalOpen}));
    this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
  };

  componentDidMount(){
    this.props.fetchData();
  }

  render() {
    let arr = this.props.data.filter(elem => { if(elem.rentalID < 7) {
      return true;
    }})
    console.log(this.props);
    return( 
      <>
        <section className="intro">
          <Header toggleModal = {this.toggleModal} toggleRegistration = {this.toggleRegistration}/>
          {
          this.state.isModalOpen &&
            <LogIn onClose={this.toggleModal} onToggleWindows={this.toggleModalWindows}>
            </LogIn>
          }
          {
          this.state.isRegistrationOpen &&
            <Registration onClose={this.toggleRegistration} onToggleWindows={this.toggleModalWindows}>
            </Registration>
          }                             
          <h1>Найдите лучший дом для себя</h1>
          <div className="search__block">
            <input type="text" placeholder="Где вы хотите снять жильё..." />
            <Link to="/filter">
              <button className="btn__blue">Найти</button>
            </Link>
          </div>
          <Link to="/mapfilter">
            <button className="btn__yellow onMap">Найти на карте</button>
          </Link>
        </section>

        <section className="ads__section">
          <h2>Недавние обьявления</h2>
          <div className="ads__blocks">
            {
              arr.map(elem => {
                return(
                  <Link onClick={() => this.props.CardId(elem.rentalID)} to="/flatcard">               
                    <div className="ads__block">
                      <img src={adsImg} alt="img"/>
                      <div className="ads__block__info">
                      <span>{elem.description}</span>
                      <div className="ads__price">
                        <span>{elem.cost}c</span>
                        <Link to="/mapfilter">
                          <span>На карте</span>
                        </Link>
                      </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div> 
          <button onClick={() =>{
            this.props.fetchData();
          }}>Ещё +</button>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.getData.data, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData,
    CardId: (rentalID) => dispatch(getCardId(rentalID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
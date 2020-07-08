import React, {Component, useEffect} from 'react';
import './mainPage.css';
import { Link } from 'react-router-dom';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';
import Header from '../header/header';
import Footer from '../footer/footer';
import {MainFlatCard} from './main-flatCard';

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/actions';



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
    let arr = this.props.data.filter(elem => {if(elem.rentalID < 7){
      return true;
    }} )
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
            return <MainFlatCard cost={elem.cost} id={elem.rentalID} title={elem.description}/>
  })}
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
  return{
    data: state.getData.data
  }
}

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
import React, {Component} from 'react';
import Header from '../header/header';
import './filter.css';
// import arrow from '../../content/images/filter/next.png'
import { Link } from 'react-router-dom';
import filterImg from '../../content/images/filter/home3.jpg';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';
import { connect } from 'react-redux';
import {setFilterItems, getFilterData} from '../../redux/actions/actions';
import {Loader} from '../loader/loader';



export class Filter extends Component {
  constructor(){
  super();
  this.state = {
    isModalOpen: false,
    isRegistrationOpen: false
  };
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

  setFilterItems = () =>{
    let array = document.querySelectorAll('select');
    let items = '';
    array.forEach(elem => {
      if(elem.value !== ''){
      items +=  elem.value + '&'
      }
    })
    this.props.setFilterItems(items);
  };

  getData = () => {
    this.props.getFilterData(this.props.items);
  }

  render() {
  console.log(this.props);
    return( 
      <>
        <Header toggleModal = {this.toggleModal} toggleRegistration = {this.toggleRegistration}/>
        {this.state.isModalOpen &&
          <LogIn onClose={this.toggleModal} onToggleWindows={this.toggleModalWindows}></LogIn>
        }
        {this.state.isRegistrationOpen &&
          <Registration onClose={this.toggleRegistration} onToggleWindows={this.toggleModalWindows}></Registration>
        }
        <div className="search__block__filter">
          <input type="text" placeholder="Где вы хотите снять жильё..." />
          <button className="btn__yellow">Найти</button>
        </div>
        <div className="filter__block">
            <ul className="main_filter">
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="" id="city">Город</option>
                    <option value="region=0">Бишкек</option>
                    <option value="region=1">Чуй</option>
                    <option value="region=2">Ысык-куль</option>
                    <option value="region=3">Нарын</option> 
                    <option value="region=4">Талас</option> 
                    <option value="region=5">Джалал-Абад</option>
                    <option value="region=6">Ош</option>  
                    <option value="region=5">Баткен</option>  
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Тип недвижимости</option>
                    <option value="property=0">Участок</option>
                    <option value="property=1">Квартира</option>  
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Этаж</option>
                    <option value="floor=0">1</option>
                    <option value="floor=1">2</option> 
                    <option value="floor=2">3</option>
                    <option value="floor=3">4</option>
                    <option value="floor=4">5</option> 
                    <option value="floor=5">6</option>
                    <option value="floor=6">7</option>
                    <option value="floor=7">8</option>
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Кол-во комнат</option>
                    <option value="rooms=1">1</option>
                    <option value="rooms=2">2</option>  
                    <option value="rooms=3">3</option>  
                    <option value="rooms=4">4</option>  
                    <option value="rooms=5">5</option>
                </select>
            </ul>
            <ul className="main_filter">
            <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Цена от</option>
                    <option value="CostrangeStart=5000">5000с</option>
                    <option value="CostrangeStart=10000">10000с</option>
                    <option value="CostrangeStart=15000">15000с</option>
                    <option value="CostrangeStart=20000">20000с</option> 
                    <option value="CostrangeStart=30000">30000с</option> 
                    <option value="CostrangeStart=40000">40000с</option>     
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Цена до</option>
                    <option value="CostrangeEnd=5000">5000с</option>
                    <option value="CostrangeEnd=10000">10000с</option>
                    <option value="CostrangeEnd=15000">15000с</option>
                    <option value="CostrangeEnd=20000">20000с</option> 
                    <option value="CostrangeEnd=30000">30000с</option> 
                    <option value="CostrangeEnd=40000">40000с</option>   
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">В квартире есть</option>
                    <option value="Internet=true">Интернет</option>
                    <option value="Phone=true">Телефон</option>
                    <option value="Kitchen=true">Гарнитура</option>  
                    <option value="TV=true">Телевизор</option>  
                    <option value="Balcony=true">Балкон</option>  
                    <option value="Washer=true">Стиральная машина</option>
                    <option value="AirConditioning=true">Кондиционер</option>        
                </select>
                <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                    <option value="">Рядом есть</option>
                    <option value="Cafe=true">Кафе</option>
                    <option value="KinderGarten=true">Детский сад</option>
                    <option value="Parking=true">Парковка</option>
                    <option value="BusStop=true">Остановка</option>
                    <option value="Supermarket=true">Супермаркет</option>
                    <option value="Park=true">Парк</option>
                    <option value="Hospital=true">Больница</option>   
                </select>
            </ul>
            <button className="btn__blue filter__btn" onClick={this.getData}>Найти</button>
        </div>
        <div className="ads__blocks">
          {
            this.props.app.loading &&
              <Loader />
          }
          {
            this.props.data.map(elem => {
              return(
                <Link onClick={() => this.props.CardId(elem.rentalID)} to="/flatcard">               
                  <div className="ads__block">
                    <img src={filterImg} alt="img"/>
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
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    data: state.getFilterData.data,
    items: state.filter,
    app: state.app 
  }
}


export default connect(mapStateToProps,{setFilterItems, getFilterData})(Filter);
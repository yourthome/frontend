import React, { Component } from 'react';
import Header from '../header/header';
import './filter.css';
import { Link } from 'react-router-dom';
import filterImg from '../../content/images/filter/home3.jpg';
import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';
import { connect } from 'react-redux';
import { setFilterItems, getFilterData } from '../../redux/actions/actions';
import { Loader } from '../loader/loader';
import { getCardId } from '../../redux/actions/actions';
import { setSearchVal } from '../../redux/actions/actions';
import Select from 'react-select';
import noPhoto from '../../content/images/main/no_photo.jpg'


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
        if(elem.value !== '') {
          items +=  elem.value + '&'
        }
      })
      this.props.setFilterItemsD(items);
    };

    searching = e =>{
      this.props.setInpVal(e.target.value);
    //   let str = e.target.value;
    //   let obj = this.props.data;
    //   let dat = obj.filter(elem => {
    //     if(elem.title.search(str) == -1){
    //       return true
    //     }
    //     else{
    //       return false
    //     }
    //   })
    //   console.log(dat)
    } 

    getData = () => {
      let array = document.querySelectorAll('select');
    let items = '';
    array.forEach(elem => {
      if(elem.value !== '') {
        items += elem.value + '&'
      }
    })
    let attr = document.getElementsByName('colors');
    attr.forEach(elem => {
      if(elem.value !== '') {
        items += elem.value + '&'
      }
    })
    console.log(items)
      this.props.getFilterDataD(items);
      // this.setState({data: this.props.data});
    };



  render() {
    const styles ={
        border: 'none',
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        background: 'rgba(194, 199, 208, 0.4)',
        fontSize: '13px'
    }
    
    const options = [
      { value: 'Internet=true', label: 'Интернет' },
      { value: 'Phone=true', label: 'Телефон' },
      { value: 'Kitchen=true', label: 'Гарнитура' },
      { value: 'TV=true', label: 'Телевизор' },
      { value: 'Balcony=true', label: 'Балкон' },
      { value: 'Washer=true', label: 'Стиральная машина' },
      { value: 'AirConditioning=true', label: 'Кондеционер' },
    ]

    const options2 = [
      { value: 'Cafe=true', label: 'Кафе, рестораны' },
      { value: 'KinderGarten=true', label: 'Детский сад' },
      { value: 'Parking=true', label: 'Парковка' },
      { value: 'BusStop=true', label: 'Остановка' },
      { value: 'Supermarket=true', label: 'Магазин' },
      { value: 'Park=true', label: 'Парк' },
      { value: 'Hospital=true', label: 'Больница' },
    ]

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
        <input type="text" placeholder="Где вы хотите снять жильё..." onChange={this.searching} defaultValue={this.props.searchVal}/>
        <button className="btn__yellow" onClick={this.getData}>Найти</button>
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
        </ul>
        <ul className="main_filter">
        <select className="selct__block__filter" onChange={(e) => this.setFilterItems(e.target.value)}>
                <option value="">Кол-во комнат</option>
                <option value="rooms=1">1</option>
                <option value="rooms=2">2</option>  
                <option value="rooms=3">3</option>  
                <option value="rooms=4">4</option>  
                <option value="rooms=5">5</option>
            </select>
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
        </ul>
        <div className="select_filter_fasilities_div">
          <Select
            defaultValue={''}
            style={styles}
            isMulti
            name="colors"
            options={options}
            className="select_filter_fasilities"
            classNamePrefix="select"
            placeholder="В наличии есть..."
          />
          <Select
            defaultValue={''}
            isMulti
            name="colors"
            options={options2}
            className="select_filter_fasilities"
            classNamePrefix="select"
            placeholder="Рядом есть..."
          />
          </div>
        <button className="btn__blue filter__btn" onClick={this.getData}>Найти</button>
    </div>

    <div className="ads__blocks">
      {
        this.props.app.loading ? <Loader /> :
        this.props.data.reverse().map(elem => {
          return(
            <Link onClick={() => this.props.CardId(elem.rentalID)} to={`/flatcard/${elem.rentalID}`}>               
              <div className="ads__block">
                <img src={elem.photos[0] === undefined ? noPhoto : elem.photos[0].path} alt="img"/>
                <div className="ads__block__info">
                <span>{elem.title}</span>
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
      {
        this.props.data.length ? '' : 
          <span className="filter_empty_alert">Нет подходящих обьявлений</span>  
      }
    </div>
  </>
)}}


const mapStateToProps = state => {
  return {
    data: state.getFilterData.data.filter(elem => elem.street.toLowerCase().includes(state.setSearchVal.search)),
    items: state.filter,
    app: state.app,
    searchVal: state.setSearchVal.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterItemsD: (item) => dispatch(setFilterItems(item)),
    CardId: (rentalID) => dispatch(getCardId(rentalID)),
    getFilterDataD: (items) => dispatch(getFilterData(items)),
    setInpVal: (val) => dispatch(setSearchVal(val))
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
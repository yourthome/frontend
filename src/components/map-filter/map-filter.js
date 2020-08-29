import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMapFilterData, getMarkerId } from '../../redux/actions/actions';
import { setSearchVal } from '../../redux/actions/actions';

import MapContainer from '../map/map'
import Footer from '../footer/footer'

import './map-filter.css'

import { fetchMapData } from '../../redux/actions/actions';
import Select from 'react-select';

class MapFilter extends Component {

  setFilterItems = () => {
    let array = document.querySelectorAll('select');
    let items = '';
    array.forEach(elem => {
      if(elem.value !== '') {
        items += elem.value + '&'
      }
    })
    this.props.getMapFilterDataD(items)
  };

  componentDidMount() {
    this.props.getMapFilterDataD('')
    this.props.serverMapData();
  }

    
  render() {
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
      { value: 'Cafe=true', label: 'Кафе, Рестораны' },
      { value: 'KinderGarten=true', label: 'Детский садик' },
      { value: 'Parking=true', label: 'Парковка' },
      { value: 'BusStop=true', label: 'Остановка' },
      { value: 'Supermarket=true', label: 'Магазин' },
      { value: 'Park=true', label: 'Парк' },
      { value: 'Hospital=true', label: 'Больница' },
    ]
    return (
      <>
        {console.log(this.props.filteredMapData)}
        <header className="map-filter-header">
          <div className="map-filter-header__description">
            <Link to="/">
              <img id="map-filter-header__logo-1" src={require(`../../content/images/header/plain-logo-yellow.svg`)} alt="website logo"/>
              <img id="map-filter-header__logo-2" src={require(`../../content/images/header/plain-logo-blue.svg`)} alt="website logo"/>
            </Link>
          </div>

          <div className="map-filter-header__input-group">
            <input placeholder="Где вы хотите снять жильё..." defaultValue={this.props.searchVal} onChange={(e) => {this.props.setInpVal(e.target.value)}}></input>
            <button id="map-filter-header__input-group-button">Найти</button>
          </div>

          <div className="map-filter-header__menu">
            {/* <Link className="map-filter-header__menu-1" to='/mapfilter'>
              <p>Подать заявку</p>
            </Link> */}

            {/* <Link className="map-filter-header__menu-2" to='/mapfilter'>
              <p>Войти</p>
            </Link> */}
          </div>
        </header>

        <section className="map-filter-container">
          <div className="map-filter-container-left">
            <div className="map-filter-lists">
              <ul className="main_filter map_main_filter">
                <select className="selct__block__filter">
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
                <select className="selct__block__filter">
                    <option value="">Тип недвижимости</option>
                    <option value="property=0">Участок</option>
                    <option value="property=1">Квартира</option>  
                </select>
              </ul>

              <ul className="main_filter map_main_filter">
                <select className="selct__block__filter" >
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
                <select className="selct__block__filter" >
                    <option value="">Кол-во комнат</option>
                    <option value="rooms=1">1</option>
                    <option value="rooms=2">2</option>  
                    <option value="rooms=3">3</option>  
                    <option value="rooms=4">4</option>  
                    <option value="rooms=5">5</option>
                </select>
              </ul>

              <ul className="main_filter map_main_filter ">
                <select className="selct__block__filter" >
                    <option value="">Цена от</option>
                    <option value="CostrangeStart=5000">5000с</option>
                    <option value="CostrangeStart=10000">10000с</option>
                    <option value="CostrangeStart=15000">15000с</option>
                    <option value="CostrangeStart=20000">20000с</option> 
                    <option value="CostrangeStart=30000">30000с</option> 
                    <option value="CostrangeStart=40000">40000с</option>     
                </select>
                <select className="selct__block__filter" >
                    <option value="">Цена до</option>
                    <option value="CostrangeEnd=5000">5000с</option>
                    <option value="CostrangeEnd=10000">10000с</option>
                    <option value="CostrangeEnd=15000">15000с</option>
                    <option value="CostrangeEnd=20000">20000с</option> 
                    <option value="CostrangeEnd=30000">30000с</option> 
                    <option value="CostrangeEnd=40000">40000с</option>   
                </select>
              </ul>

              <ul className="main_filter map_main_filter map_main_filter123">
                    <Select
                      defaultValue={''}
                      isMulti
                      name="colors"
                      options={options}
                      className="select_filter_fasilities"
                      classNamePrefix="select"
                      placeholder="В наличии есть..."
                    />
                  </ul>
              <ul className="main_filter map_main_filter  map_main_filter123">
                  <Select
                    defaultValue={''}
                    isMulti
                    name="colors"
                    options={options2}
                    className="select_filter_fasilities"
                    classNamePrefix="select"
                    placeholder="Рядом есть..."
                  />
              </ul>
              <button className="btn__blue filter_map_btn filter__btn" onClick={this.setFilterItems}>Найти</button>
            </div>
          </div>

          <MapContainer filteredMapData={this.props.filteredMapData} mapData={this.props.mapData} />         
          
        </section>

        <Footer />
        
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredMapData: state.getMapFilterData.filteredMapData
    .filter(elem => elem.street.toLowerCase().includes(state.setSearchVal.search)),
    searchVal: state.setSearchVal.search,
    mapData: state.getMapData.mapData.filter((card) => card.rentalID === state.getMarkerId.markerId).pop()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMapFilterDataD: (items) => dispatch(getMapFilterData(items)),
    setInpVal: (val) => dispatch(setSearchVal(val)),
    MarkerId: (rentalID) => dispatch(getMarkerId(rentalID)),
    serverMapData: () => dispatch(fetchMapData()),
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(MapFilter);
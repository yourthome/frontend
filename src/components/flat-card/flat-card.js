import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import 'react-dates/initialize';
import { 
  DateRangePicker, 
  // SingleDatePicker, 
  // DayPickerRangeController 
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { 
  // MDBContainer, 
  MDBBtn, MDBModal, MDBModalBody, 
  // MDBModalHeader, 
  // MDBModalFooter 
} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import MapFlatCard from './map-flat-card';

import Header from '../header/header';
import Footer from '../footer/footer';

import { connect } from 'react-redux';
import { getCardId } from '../../redux/actions/actions';

import './flat-card.css';
import home2 from '../../content/images/flat-card/home2.png';
import home3 from '../../content/images/flat-card/home3.png';
import home5 from '../../content/images/flat-card/home5.png';
import home1 from '../../content/images/flat-card/home1.png';
import home6 from '../../content/images/flat-card/home6.png';

import LogIn from '../logIn/logIn';
import Registration from '../registration/registration';

import { fetchData }  from '../../redux/actions/actions'
import Axios from 'axios';

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class FlatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      modal: false,
      isModalOpen: false,
      isRegistrationOpen: false,
      rental: '',
    }
  }

  getRentalById = (id) => {
    Axios.get(`https://yourthometest.herokuapp.com/rentals/${id}`)
    .then(res => {
      this.setState({
        rental: res.data
      })
    })
  }

  componentDidMount() {
    this.props.serverData();
    this.getRentalById(this.props.match.params.id);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleModal = () =>{
    this.setState(state => ({ isModalOpen: !state.isModalOpen}));
  };

  toggleRegistration = () =>{
    this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
  };

  toggleModalWindows = () =>{
    this.setState(state => ({ isModalOpen: !state.isModalOpen}));
    this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen}));
  }

  render() {
    const slickSettings = {
      arrows: true,
      dots: true,
      lazyLoad: true,
      fade: true,
      infinite: true,
      speed: 500,
      // pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const { description, cost, rooms, street, rentTime, facilities, infrastructure, title, photos } = this.state.rental;
    // console.log(photos);

    return (
      <>
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
        <section className="flatcard-container">

          <div className='first-info'>
            <Carousel
              autoPlay
              showIndicators={false}
              infiniteLoop={true}
              width={`100%`}
              swipeable={true}
              className="slider-main"
            >
              {photos && photos.map(item => {
                return item ?
                  <div className='' key={item}>
                    <img id="slider-image" src={`${item.path}`} alt="flatcard-images"/>
                  </div>
                : null
              })}
            </Carousel>
          

          {/* <MDBContainer> */}
            <MDBBtn className="mdbbtn" onClick={this.toggle}><i class="fas fa-search"></i></MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
              {/* <MDBModalHeader toggle={this.toggle}>Изображения</MDBModalHeader> */}
              <MDBModalBody>
                <div>
                  <div>
                    <Slider {...slickSettings}>
                    {photos && photos.map(item => {
                      return item ?
                        <div className='' key={item}>
                          <img id="slick-slider-image" src={`${item.path}`} alt="flatcard-images"/>
                        </div>
                      : null
                    })}
                    </Slider>
                  </div>
                </div>
              </MDBModalBody>
              {/* <MDBModalFooter> */}
                {/* <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn> */}
                {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
              {/* </MDBModalFooter> */}
            </MDBModal>
          {/* </MDBContainer> */}

            <div className="flatcard-description">
              <p>{title}</p>
              <div className="flatcard-description-currency">
                <div className="flatcard-description-som">
                  <p>{cost}</p><p>с</p>
                </div>
                <p style={{color: '#feca15', fontSize: "25px"}}>|</p>
                <div className="flatcard-description-dollar">
                  <p>{Math.floor(cost / 77.8)}</p><p>$</p>
                </div>
              </div>
            </div>

          </div> 

          <div className="flatcard-info">
            
            <div className="flatcard-details">
              <p id="flatcard-details-title">Детали:</p>
              <div className="flatcard-details-p">
                <p>Комнат: {rooms}</p>
                <p>Улица: {street}</p>
                <p>Срок аренды: {rentTime}</p>
                {/* <p>Этаж: undefined</p>
                <p>Этажность дома: undefined</p>
                <p>Тип ремонта: undefined</p>
                <p>Мебелирована: undefined</p>
                <p>Общая площадь: undefined</p>
                <p>Тип строения: undefined</p>
                <p>Планировка: undefined</p> */}
              </div>
            </div>

            <div className="flatcard-instock-and-near">
              <div className="flatcard-instock">
                <p id="flatcard-instock-title">В наличии:</p>
                {facilities && <div className="flatcard-instock-p">
                  {facilities.internet ? <p>Интернет</p> : null}
                  {facilities.phone ? <p>Телефон</p> : null}
                  {facilities.refrigerator ? <p>Холодильник</p> : null}
                  {facilities.kitchen ? <p>Кухня</p> : null}
                  {facilities.tv ? <p>Телевизор</p> : null}
                  {facilities.balcony ? <p>Балкон</p> : null}
                  {facilities.washer ? <p>Стиральная машина</p> : null}
                  {facilities.airConditioning ? <p>Кондиционер</p> : null}
                </div>}
              </div>

              <div className="flatcard-near">
                <p id="flatcard-near-title">Рядом есть:</p>
                {infrastructure && <div className="flatcard-near-p">
                  {infrastructure.cafe ? <p>Рестораны, кафе</p> : null}
                  {infrastructure.kindergarten ? <p>Детский сад</p> : null}
                  {infrastructure.parking ? <p>Стоянка</p> : null}
                  {infrastructure.busStop ? <p>Остановки</p> : null}
                  {infrastructure.supermarket ? <p>Супермаркет</p> : null}
                  {infrastructure.park ? <p>Парк</p> : null}
                  {infrastructure.hospital ? <p>Больница</p> : null}
                </div>}
              </div>
            </div>
            

            <div className="flatcard-about">
              <p id="flatcard-about-title">Описание:</p>
              <div className="flatcard-about-pos-p">
                <p id="flatcard-about-description">{description}</p>
              </div>
            </div>

            <div className="flatcard-datepicker">
              <p>Забронированные дни: </p>
              <DateRangePicker
              // customInputIcon={<TestCustomInputIcon />}
              // customArrowIcon={<TestCustomArrowIcon />}
              // customCloseIcon={<TestCustomCloseIcon />}
              showClearDates
              showDefaultInputIcon
              withPortal
              // autoFocusEndDate 
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                // isDayBlocked={isDayBlocked} 
                // isDayHighlighted={isDayHighlighted}
                // renderCalendarDay={renderCalendarDay}
                // minimumNights={3} 
                autoFocus keepOpenOnDateSelect hideKeyboardShortcutsPanel
              />
            </div>

            <div className="flatcard-map">
              <p id="flatcard-map-description">Расположение на карте: </p>
              <MapFlatCard latitude={this.state.rental.latitude} longitude={this.state.rental.longitude} markerId={this.state.rental.rentalById} />
            </div>
          </div>

        </section>
        
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    data: state.getData.data,
    rentalById: state.getRentalById.rentalById
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CardId: (rentalID) => dispatch(getCardId(rentalID)),
    serverData: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatCard);
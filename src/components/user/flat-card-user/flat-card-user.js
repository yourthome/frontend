import React, { Component } from 'react';
import { connect } from 'react-redux'
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

import MapContainer from '../../map/map';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import './flat-card-user.css';
import home2 from '../../../content/images/flat-card/home2.png';
import home3 from '../../../content/images/flat-card/home3.png';
import home5 from '../../../content/images/flat-card/home5.png';
import home1 from '../../../content/images/flat-card/home1.png';
import home6 from '../../../content/images/flat-card/home6.png';

import MapFlatCard from '../../flat-card/map-flat-card';
import Axios from 'axios'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class FlatCardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      modal: false,
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
    this.getRentalById(this.props.match.params.id);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
    return (
      <>
        <Header />

        <section className="flatcard-container">

          {/* <div className="flatcard-images">
            <img id="flatcard-images-main" src={home2} alt="flatcard-image1"></img>
            <div className="flatcard-images-secondary">
              <img src={home3} alt="flatcard-image2"></img>
              <img src={home5} alt="flatcard-image3"></img>
              <img src={home1} alt="flatcard-image4"></img>
              <img id="darken-image" src={home6} alt="flatcard-image5"></img>
            </div>
          </div>          */}

            <Carousel
              autoPlay
              showIndicators={false}
              infiniteLoop={true}
              width={`100%`}
              swipeable={true}
              className="slider-main"

            >
              {/* <img id="slider-image" src={home2} alt="flatcard-image1"></img>
              <img id="slider-image" src={home3} alt="flatcard-image2"></img>
              <img id="slider-image" src={home5} alt="flatcard-image3"></img>
              <img id="slider-image" src={home1} alt="flatcard-image4"></img>
              <img id="slider-image" src={home6} alt="flatcard-image5"></img> */}
              {photos && photos.map(item => {
                return item ?
                  <div className='' key={item}>
                    <img id="slider-image" src={`${item.path}`} alt="flatcard-images"/>
                  </div>
                : null
              })}
            </Carousel>

          {/* <MDBContainer> */}
            {/* <MDBBtn className="mdbbtn" onClick={this.toggle}>Еще+</MDBBtn> */}
            {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg"> */}
              {/* <MDBModalHeader toggle={this.toggle}>Изображения</MDBModalHeader> */}
              {/* <MDBModalBody>
                <div>
                  <div>
                    <Slider {...slickSettings}>
                      <img id="slider-image" src={home2} alt="flatcard-image1"></img>
                      <img id="slider-image" src={home3} alt="flatcard-image2"></img>
                      <img id="slider-image" src={home5} alt="flatcard-image3"></img>
                      <img id="slider-image" src={home1} alt="flatcard-image4"></img>
                      <img id="slider-image" src={home6} alt="flatcard-image5"></img>
                    </Slider>
                  </div>
                </div>
              </MDBModalBody> */}
              {/* <MDBModalFooter> */}
                {/* <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn> */}
                {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
              {/* </MDBModalFooter> */}
            {/* </MDBModal> */}
          {/* </MDBContainer> */}

          <div className="flatcard-description">
            <p>{title}</p>
            <div className="flatcard-description-currency">
              <div className="flatcard-description-som">
                <p>{cost}</p><p>с</p>
              </div>
              <div className="flatcard-description-dollar">
                <p>{Math.floor(cost / 77.8)}</p><p>$</p>
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
              <MapFlatCard />
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
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatCardUser);
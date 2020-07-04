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

import MapContainer from '../../map/map';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import './flat-card-user.css';
import home2 from '../../../content/images/flat-card/home2.png';
import home3 from '../../../content/images/flat-card/home3.png';
import home5 from '../../../content/images/flat-card/home5.png';
import home1 from '../../../content/images/flat-card/home1.png';
import home6 from '../../../content/images/flat-card/home6.png';

export default class FlatCardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      modal: false,
      
    }
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
    return (
      <>
        <Header />

        <section className="flatcard-container">

          <div className="flatcard-images">
            <img id="flatcard-images-main" src={home2} alt="flatcard-image1"></img>
            <div className="flatcard-images-secondary">
              <img src={home3} alt="flatcard-image2"></img>
              <img src={home5} alt="flatcard-image3"></img>
              <img src={home1} alt="flatcard-image4"></img>
              <img id="darken-image" src={home6} alt="flatcard-image5"></img>
            </div>
          </div>         

          {/* <MDBContainer> */}
            <MDBBtn className="mdbbtn" onClick={this.toggle}>Еще+</MDBBtn>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
              {/* <MDBModalHeader toggle={this.toggle}>Изображения</MDBModalHeader> */}
              <MDBModalBody>
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
              </MDBModalBody>
              {/* <MDBModalFooter> */}
                {/* <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn> */}
                {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
              {/* </MDBModalFooter> */}
            </MDBModal>
          {/* </MDBContainer> */}

          <div className="flatcard-description">
            <p>Сдаю 3-х комнатную квартиру.</p>
            <div className="flatcard-description-currency">
              <div className="flatcard-description-som">
                <p>18000</p><p>с</p>
              </div>
              <div className="flatcard-description-dollar">
                <p>250</p><p>$</p>
              </div>
            </div>
          </div>

          <div className="flatcard-info">          
            <div className="flatcard-details">
              <p id="flatcard-details-title">Детали:</p>
              <div className="flatcard-details-p">
                <p>Комнат: 3</p>
                <p>Этаж: 3</p>
                <p>Этажность дома: 3</p>
                <p>Тип ремонта: Евро</p>
                <p>Мебелирована: Да</p>
                <p>Общая площадь: 117м2</p>
                <p>Тип строения: кирпичное</p>
                <p>Планировка: раздельная</p>
              </div>
            </div>

            <div className="flatcard-instock-and-near">
              <div className="flatcard-instock">
                <p id="flatcard-instock-title">В наличии:</p>
                <div className="flatcard-instock-p">
                  <p>Интернет</p>
                  <p>Телефон</p>
                  <p>Холодильник</p>
                  <p>Кухня</p>
                  <p>Телевизор</p>
                  <p>Балкон</p>
                  <p>Стиральная машина</p>
                  <p>Кондиционер</p>
                </div>
              </div>

              <div className="flatcard-near">
                <p id="flatcard-near-title">Рядом есть:</p>
                <div className="flatcard-near-p">
                  <p>Рестораны, кафе</p>
                  <p>Детский сад</p>
                  <p>Стоянка</p>
                  <p>Остановки</p>
                  <p>Супермаркет</p>
                  <p>Парк</p>
                  <p>Зелёная зона</p>
                  <p>Больница</p>
                </div>
              </div>
            </div>
            

            <div className="flatcard-about">
              <p id="flatcard-about-title">Описание:</p>
              <div className="flatcard-about-pos-p">
                <p id="flatcard-about-description">В Новом Роскошном Жилом Комплексе!!! <br></br> Продается 2-комнатная квартира с общей площадью 70 м2.</p>
                <p>Преимущества Ж.К:</p>
                <div className="flatcard-about-p">
                  <p>- Качественная Российская входная - металлическая дверь;</p>
                  <p>- Пластиковые рамы imzo premium;</p>
                  <p>- Счётчики;</p>
                  <p>- Видео наблюдение 24/7</p>
                  <p>- Детские площадки во дворе Ж.К</p>
                  <p>- Охраняемая территория</p>
                </div>
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
              <MapContainer />
            </div>
          </div>

        </section>
        
        <Footer />
      </>
    )
  }
}

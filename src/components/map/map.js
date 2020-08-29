import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import { getMarkerId } from '../../redux/actions/actions';
// import { fetchMapData } from '../../redux/actions/actions';

import { Carousel } from 'react-responsive-carousel';
import noPhoto from '../../content/images/main/no_photo.jpg'
import './map.css';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    }
  }

  // componentDidMount(){
  //   this.props.serverMapData();
  // }

  displayMarkers = () => {
    const mapArr = this.props.filteredMapData;
    return mapArr.map((dat) => {
      return <Marker id={dat.rentalID} key={dat.rentalID} position={{
        lat: dat.latitude,
        lng: dat.longitude
      }}
      onClick={this.onMarkerClick}
     />
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    this.props.MarkerId(marker.id);
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    // console.log(this.props.filteredMapData)
    // const { description, cost, rooms, street, rentTime, facilities, infrastructure, title } = this.props.mapData;
    const markerArr = this.props.filteredMapData;
    return(

      <Map
        className="map-component"
        google={this.props.google}
        zoom={7}
        initialCenter={{ lat: 41.867695, lng: 74.610897 }}
      >
        {this.displayMarkers()}
        
        
          {
            markerArr.map((elem) => {
              return (elem.rentalID === this.state.activeMarker.id ?
                <InfoWindow onClose={this.onInfoWindowClose}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                >
                  <div className="map-infobox-container">
                    {/* <Carousel autoPlay>
                      <div>
                        <img alt="" src={require('../../content/images/main/michael-browning-akz0w36DpM4-unsplash.jpg')} />
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img alt="" src={require('../../content/images/main/michael-browning-akz0w36DpM4-unsplash.jpg')} />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img alt="" src={require('../../content/images/main/michael-browning-akz0w36DpM4-unsplash.jpg')} />
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel> */}
                    <img id="map-infobox-img" src={elem.photos[0] === undefined ? noPhoto : elem.photos[0].path} alt="map-infobox-img"></img>
                    {/* <Link className="map-infobox-description" to="/mapfilter">Сдаю 3-х комнатную квартиру.</Link> */}
                    <p id="map-infobox-title">{elem.title}</p>
                    <p id="map-infobox-location">{elem.street}</p>
                    <p id="map-infobox-cost-soms">{elem.cost}сом | {Math.floor(elem.cost / 77.8)}$</p>
                    <p id="map-infobox-description">{elem.description}</p>
                    {/* <Link to={`/flatcard/${elem.rentalID}`}></Link> */}
                  </div>
                </InfoWindow>
              : null)
            })
            // <div className="map-infobox-container">
            //     {/* <img id="map-infobox-img" src={photo} alt="map-infobox-img"></img> */}
            //     {/* <Link className="map-infobox-description" to="/mapfilter">Сдаю 3-х комнатную квартиру.</Link> */}
            //     <p id="map-infobox-title">Сдаю 3-х комнатную квартиру.</p>
            //     <p id="map-infobox-location">Бишкек, Горького/Советская</p>
            //     <p id="map-infobox-cost-dollars">$ 29 500</p>
            //     <p id="map-infobox-cost-soms">2 216 108 сом</p>
            //     <p id="map-infobox-description">Продаж 1 кв. Советская/Горького. Квартира не угловая, дом кирпичный. Ванная кафель рабочая стена, трубы пластик, установлены приборы учета на холодную и горячую воду. Дверь входная бронированная, тамбурная. Закрытый двор, чистый подъезд. Во дворе видеонаблюдение.</p>
            // </div>
          }
        
      </Map>
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    // mapData: state.getMapData.mapData.filter((card) => card.rentalID === state.getMarkerId.markerId)
    // .pop()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // serverMapData: () => dispatch(fetchMapData()),
    MarkerId: (rentalID) => dispatch(getMarkerId(rentalID)),
  }
} 

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  GoogleApiWrapper({
      apiKey: "AIzaSyBdX8g6lM-w20K543TW18kRyocWnk9muNk"
  }),
)

export default enhance(MapContainer)
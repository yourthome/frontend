import React, {Component, useState, useRef} from 'react';
// import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import { Link } from 'react-router-dom'
import { GoogleMap, LoadScript, InfoWindow, withGoogleMap, withScriptjs, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';

// import GoogleMapReact from 'google-map-react';

import './map.css'
import photo from '../../content/images/flat-card/home1.png'

Geocode.setApiKey("AIzaSyBdX8g6lM-w20K543TW18kRyocWnk9muNk");
Geocode.enableDebug();

const containerStyle = {
  width: 'auto',
  height: '541px'
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const center = {
  lat: 42.867695,
  lng: 74.610897
}

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}

const position = { lat: 42.863585, lng: 74.611787 }

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        {lat: 42.867695, lng: 74.610897},
        {latitude: 42.863585, longitude: 74.611787},
        {latitude: 42.862475, longitude: 74.610677},
        {latitude: 42.861365, longitude: 74.612567},
        {latitude: 42.869255, longitude: 74.612457},
        {latitude: 42.863145, longitude: 74.616347}],
        
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
  }

  // displayMarkers = () => {
  //   return this.state.stores.map((store, index) => {
  //     return <Marker key={index} id={index} position={{
  //      lat: store.latitude,
  //      lng: store.longitude
  //    }}
  //   //  draggable={true} 
  //    onClick={this.onMarkerClick} 
  //    />
  //   })
  // }

  // onMarkerClick = (props, marker, e) =>
  // this.setState({
  //   selectedPlace: props,
  //   activeMarker: marker,
  //   showingInfoWindow: true
  // });

  // onClose = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  render() {
    return(


      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <InfoWindow
            onLoad={onLoad}
            position={position}
          >
            <div style={divStyle}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>


    // <Map
    //   className="map-component"
    //   google={this.props.google}
    //   zoom={15}
    //   // style={mapStyles}
    //   initialCenter={{ lat: 42.867695, lng: 74.610897 }}
    // >
    //   {this.displayMarkers()}
    //   {/* <Marker 
    //           // position={{ lat: 42.867695, lng: 74.610897 }} 
    //           onClick={this.onMarkerClick}
    //           name={'Current location'}
    //   /> */}
    //   <InfoWindow onClose={this.onInfoWindowClose}
    //               marker={this.state.activeMarker}
    //               visible={this.state.showingInfoWindow}
    //   >
    //     <div className="map-infobox-container">
    //       {/* {this.state.selectedPlace.name} */}
    //       {/* <div> */}
    //         <img id="map-infobox-img" src={photo} alt="map-infobox-img"></img>
    //         {/* <Link className="map-infobox-description" to="/mapfilter">Сдаю 3-х комнатную квартиру.</Link> */}
    //         <p id="map-infobox-title">Сдаю 3-х комнатную квартиру.</p>
    //         <p id="map-infobox-location">Бишкек, Горького/Советская</p>
    //         <p id="map-infobox-cost-dollars">$ 29 500</p>
    //         <p id="map-infobox-cost-soms">2 216 108 сом</p>
    //         <p id="map-infobox-description">Продаж 1 кв. Советская/Горького. Квартира не угловая, дом кирпичный. Ванная кафель рабочая стена, трубы пластик, установлены приборы учета на холодную и горячую воду. Дверь входная бронированная, тамбурная. Закрытый двор, чистый подъезд. Во дворе видеонаблюдение.</p>
    //       {/* </div> */}
    //     </div>
    //   </InfoWindow>
    // </Map>


    );
  }  
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBdX8g6lM-w20K543TW18kRyocWnk9muNk'
// })(MapContainer);

export default MapContainer;
  
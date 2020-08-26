import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { fetchMapData } from '../../redux/actions/actions';
// import Axios from 'axios';

class MapFlatCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rental: '',
    }
  }

  render() {
    const latitude = this.props.lati;
    console.log(latitude)
    const longitude = this.props.longi;
    console.log(longitude)
    return(
      <Map
        className="map-component"
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 42.867695, lng: 74.610897 }}
      >
        <Marker id={this.props.markerId} key={this.props.markerId} position={{
            lat: this.props.lati,
            lng: this.props.longi
          }}
          onClick={this.onMarkerClick}
        />
      </Map>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     mapData: state.getMapData.mapData
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     serverMapData: () => dispatch(fetchMapData()),
//   }
// } 

// const enhance = compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   GoogleApiWrapper({
//       apiKey: process.env.REACT_APP_GOOGLE_API_KEY
//   }),
// )

// export default enhance(MapFlatCard)

export default GoogleApiWrapper({apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(MapFlatCard)
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchMapData } from '../../redux/actions/actions';

class MapFlatCard extends Component {

  constructor(props) {
    super(props);
      this.state = {

      }
  }

  componentDidMount(){
    this.props.serverMapData();
  }

  displayMarkers = () => {
    const mapArr = this.props.mapData;
    return mapArr.map((mark) => {
      return (mark.rentalID ? <Marker id={mark.rentalID} key={mark.rentalID} position={{
        lat: mark.latitude,
        lng: mark.longitude
      }}
      onClick={this.onMarkerClick}
     /> : null)
    })
  }

  render() {
    const marker = this.props.mapData;
    console.log(this.props.mapData)
    return(
      <Map
        className="map-component"
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 42.867695, lng: 74.610897 }}
      >
        {this.displayMarkers()}
        {/* <Marker key={marker.rentalID} position={{
            lat: marker.latitude,
            lng: marker.longitude
          }}
        /> */}
      </Map>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapData: state.getMapData.mapData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    serverMapData: () => dispatch(fetchMapData()),
  }
} 

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  GoogleApiWrapper({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  }),
)

export default enhance(MapFlatCard)
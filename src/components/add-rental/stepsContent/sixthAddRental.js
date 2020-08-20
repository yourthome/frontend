import React, { Component, useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, InfoWindow } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import "@reach/combobox/styles.css";

const containerStyle = {
  width: '800px',
  height: '375px'
};
const center = {
  lat: 42.867695,
  lng: 74.610897
};
const libraries = ["places"];


export default function SixthAddRental({ prevStep, handleSubmit, handleMarker }, props) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries
  })

  const [marker, setMarker] = useState({});
  const [selected, setSelected] = useState(null);
  
  const onMapCLick = (event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    handleMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const prev = e => {
    e.preventDefault();
    prevStep();
  }

  return(
    <div className="rental__form__content">

      <Search panTo={panTo}/>        

      <GoogleMap
        id="add-rental-map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={onMapCLick}
        onLoad={onMapLoad}
      >
        <Marker 
          key={`${marker.lat}-${marker.lng}`} 
          position={{ lat: marker.lat, lng: marker.lng }} 
          onClick={() => {
            setSelected(marker);
          }}
        />

        {selected ? (
          <InfoWindow 
            position={{lat: selected.lat, lng: selected.lng}}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>lat: {selected.lat}</p>
              <p>lng: {selected.lng}</p>
            </div>
          </InfoWindow>) : null
        }

      </GoogleMap>

      <Locate panTo={panTo} />

      <div className="rental__form__btns">
        <button onClick={prev}>Назад</button>
        <button onClick={props.handleSubmit}>Готово</button>
      </div>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img id="image-compass-button" src={require(`../../../content/images/addRental/compass.svg`)} alt="compass" />
    </button>
  );
}

function Search({ panTo }) {
  const { ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 42.867695, lng: () => 74.610897 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="sixth-search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput 
          value={value} 
          onChange={handleInput}
          disabled={!ready}
          placeholder="Укажите адрес" 
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" && 
              data.map(({id, description}) => (
                <ComboboxOption key={id} value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}



// ЕСЛИ НУЖЕН КЛАССОВЫЙ КОМПОНЕНТ НАДО ЗАКОММЕНТИРОВАТЬ ВСЕ, ЧТО СВЕРХУ

// import React, { Component } from 'react';

// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// import Autocomplete from 'react-google-autocomplete';
// import { Descriptions } from 'antd';

// Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
// Geocode.enableDebug();

// export default class SixthAddRental extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       address: '',
//       city: '',
//       area: '',
//       state: '',
//       zoom: 15,
//       height: 350,
//       mapPosition: {
//         lat: 42.867695,
//         lng: 74.610897,
//       },
//       markerPosition: {
//         lat: 42.867695,
//         lng: 74.610897,
//       }
//     }
//   }


//   componentDidMount() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.setState({
//           mapPosition: {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           },
//           markerPosition: {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           }
//         },
//         () => {
//           Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
//             response => {
//               console.log(response)
//               const address = response.results[0].formatted_address,
//                     addressArray = response.results[0].address_components,
//                     city = this.getCity(addressArray),
//                     area = this.getArea(addressArray),
//                     state = this.getState(addressArray);
//               console.log('city', city, area, state);
//               this.setState({
//                 address: (address) ? address : '',
//                 area: (area) ? area : '',
//                 city: (city) ? city : '',
//                 state: (state) ? state : '',
//               })
//             },
//             error => {
//                 console.error(error);
//             }
//           );
//         })
//       });
//     } else {
//       console.error("Geolocation is not supported by this browser!");
//     }
//   };


//   getCity = (addressArray) => {
//     let city = '';
//     for (let i = 0; i < addressArray.length; i++) {
//       if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
//         city = addressArray[i].long_name;
//         return city;
//       }
//     }
//   };


//   getArea = (addressArray) => {
//     let area = '';
//     for (let i = 0; i < addressArray.length; i++) {
//       if (addressArray[i].types[0]) {
//         for (let j = 0; j < addressArray[i].types.length; j++) {
//           if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
//             area = addressArray[i].long_name;
//             return area;
//           }
//         }
//       }
//     }
//   };


//   getState = (addressArray) => {
//     let state = '';
//     for (let i = 0; i < addressArray.length; i++) {
//       for (let i = 0; i < addressArray.length; i++) {
//         if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
//           state = addressArray[i].long_name;
//           return state;
//         }
//       }
//     }
//   };


//   onChange = (event) => {
//       this.setState({ [event.target.name]: event.target.value });
//   };


//   onInfoWindowClose = (event) => { };


//   onMarkerDragEnd = (event) => {
//     let newLat = event.latLng.lat(),
//         newLng = event.latLng.lng();

//     Geocode.fromLatLng(newLat, newLng).then(
//       response => {
//         const address = response.results[0].formatted_address,
//               addressArray = response.results[0].address_components,
//               city = this.getCity(addressArray),
//               area = this.getArea(addressArray),
//               state = this.getState(addressArray);
//         this.setState({
//           address: (address) ? address : '',
//           area: (area) ? area : '',
//           city: (city) ? city : '',
//           state: (state) ? state : '',
//           markerPosition: {
//               lat: newLat,
//               lng: newLng
//           },
//           mapPosition: {
//               lat: newLat,
//               lng: newLng
//           },
//         })
//       },
//       error => {
//           console.error(error);
//       }
//     );
//   };


//   onPlaceSelected = (place) => {
//     console.log('plc', place);
//     const address = place.formatted_address,
//           addressArray = place.address_components,
//           city = this.getCity(addressArray),
//           area = this.getArea(addressArray),
//           state = this.getState(addressArray),
//           latValue = place.geometry.location.lat(),
//           lngValue = place.geometry.location.lng();

//     console.log('latvalue', latValue)
//     console.log('lngValue', lngValue)

//     // Set these values in the state.
//     this.setState({
//       address: (address) ? address : '',
//       area: (area) ? area : '',
//       city: (city) ? city : '',
//       state: (state) ? state : '',
//       markerPosition: {
//         lat: latValue,
//         lng: lngValue
//       },
//       mapPosition: {
//         lat: latValue,
//         lng: lngValue
//       },
//     })
//   };


//   render() {
//     const AsyncMap = withScriptjs(
//       withGoogleMap(
//         props => (
//           <GoogleMap
//             defaultZoom={this.state.zoom}
//             defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
//           >
//             {/* InfoWindow on top of marker */}

//             {/*Marker*/}
//             <Marker
//               google={this.props.google}
//               name={'Dolores park'}
//               draggable={true}
//               onDragEnd={this.onMarkerDragEnd}
//               position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
//             />
//               <InfoWindow
//                 // onClose={this.onInfoWindowClose}
//                 position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
//               >
//                 {/* <div> */}
//                   <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
//                 {/* </div> */}
//               </InfoWindow>
//             <Marker />

//             {/* For Auto complete Search Box */}
//             <Autocomplete
//               style={{
//                 width: '100%',
//                 height: '40px',
//                 paddingLeft: '16px',
//                 marginTop: '2px',
//                 marginBottom: '2rem'
//               }}
//               onPlaceSelected={this.onPlaceSelected}
//               types={['(regions)']}
//             />
//           </GoogleMap>
//         )
//       )
//     );

//     return (
//       <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
//         <h1>Google Map Basic</h1>
//         {/* <Descriptions bordered>
//             <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
//             <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
//             <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
//             <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
//         </Descriptions> */}

//           <AsyncMap
//             googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`}
//             loadingElement={
//               <div style={{ height: `100%` }} />
//             }
//             containerElement={
//               <div style={{ height: this.state.height }} />
//             }
//             mapElement={
//               <div style={{ height: `100%` }} />
//             }
//           />
//       </div>
//     )
//   }
// }
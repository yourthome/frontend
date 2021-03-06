import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, InfoWindow } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import "@reach/combobox/styles.css";
import Geocode from "react-geocode";

const containerStyle = {
  width: '800px',
  height: '375px'
};
const center = {
  lat: 42.867695,
  lng: 74.610897
};
const libraries = ["places"];


export default function SixthAddRental({ prevStep, handleMarker, nextStep, toggleAddress }, props) {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBdX8g6lM-w20K543TW18kRyocWnk9muNk",
    libraries
  })

  Geocode.setApiKey("AIzaSyBdX8g6lM-w20K543TW18kRyocWnk9muNk");
  Geocode.setLanguage("ru");
  Geocode.setRegion("ky-KG");
  Geocode.enableDebug();

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
    toggleAddress(event.latLng.lat(), event.latLng.lng())
  };

  // const toggleAddress = () => {
  //   Geocode.fromLatLng(this.state.rental.latitude, this.state.rental.longitude)
  //   .then(
  //     response => {
  //       const address = response.results[0].formatted_address;
  //       const { rental } = this.state
  //       this.setState({
  //         rental: ({
  //           ...rental,
  //           street: address
  //         })
  //       })
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

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

  const next = e => {
    e.preventDefault();
    nextStep();
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
        <button onClick={next}>Далее</button>
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
    console.log(address)
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

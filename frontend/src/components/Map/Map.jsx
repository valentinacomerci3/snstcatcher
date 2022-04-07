import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'


import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon  className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2"> Explore all the spots </h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD_topA0oXeYf0JvLPvT0Mum18u3Rw_Ei8' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
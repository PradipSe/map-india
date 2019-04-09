import React, { Component, Fragment } from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

  render() {

    const arrMarker = this.props.mapSelectedCordinate && this.props.mapSelectedCordinate.map((val, index) => {
      return <Marker
        key={index}
        name={val.name}
        position={{lat: val.lat, lng: val.lng}} />
    })

    // console.log('arrMarker: ', arrMarker)

    return (
      <Fragment>
        <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          initialCenter={{
            lat: 21.2691442,
            lng: 96.8124672
          }}
          zoom={5}>
          { arrMarker }
        </Map>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBtuBwjYiHTvApUxHuDdrd9caA8u4vQFLw')
})(MapContainer)

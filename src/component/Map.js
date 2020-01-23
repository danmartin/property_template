import React , {Component} from 'react';
import { Map,GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        showingInfoWindow: true,
        stores: [{lat: 45.5382857, lng: -123.1340815}],
        activeMarker: null
      }
    }
  
    render() {
      let propertyData = this.props.propertyData;
        const mapStyles = {
            width: '100%',
            height: '500px',
        };
      return (
          <section className="contact_map" id="map">
              <Map
              google={this.props.google}
              zoom={17}
              initialCenter={{ lat: 45.5384, lng: -123.134}}
              style= {mapStyles}
            >
              {/* {this.displayMarkers()} */}
              <Marker title={propertyData.display_address} name={propertyData.display_address + ' 1'} position={{ lat: propertyData.google.map.lat, lng:propertyData.google.map.lng }} />
              
            </Map>
          </section>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y'
  })(MapContainer);
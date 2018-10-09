import React, {Component} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(
    withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    zoom={props.zoom}
    defaultCenter={{ lat: 40.448506, lng: -80.00250 }}
    center={props.center}
  >  
    {props.markers && 
        props.markers.filter(marker => marker.isVisible).map((marker, idx) => { 
            const venueInfo = props.venues.find(venue => venue.id === marker.id);
                return (
                    <Marker
                      animation={window.google.maps.Animation.DROP}   
                      key={idx} 
                      position={{ lat: marker.lat, lng: marker.lng }}
                      onClick={() => props.handleMarkerClick(marker)}
                    >
                {marker.isOpen &&  
                    venueInfo.bestPhoto && (
                <InfoWindow>
                    <React.Fragment>
                        <img src={`${venueInfo.bestPhoto.prefix}100x100${venueInfo.bestPhoto.suffix}`} alt={"P"}/>
                      <p>{venueInfo.name}</p>  
                    </React.Fragment>
                </InfoWindow>
                    
                )}
            </Marker>    
            );
                })}       
  </GoogleMap>
));


export default class MyMap extends Component {
    render() {
        return (
            <MyMapComponent
                {...this.props}
                isMarkerShown  // Appears like this was remove Video #4 3:50 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )        
    }    
}




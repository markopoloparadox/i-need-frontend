import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import "../../styles/backPage/mapComponent.css"

const POSITION = [46.0224, 16.5463]
const ZOOM = 15;

class MapComponent extends React.Component {

    constructor(props) {
        super(props);

        this.GetMarkers = this.GetMarkers.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick(event) {
        console.log(event);
        this.props.markerClicked();
    }

    GetMarkers() {
        return (<Marker position={[46.0224, 16.5463]} key="232" onClick={this.onMarkerClick}><Popup>Hello World</Popup></Marker>);
    }

    render() {
        return (
            <React.Fragment>
                <Map center={POSITION} zoom={ZOOM}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {this.GetMarkers()}
                </Map>
            </React.Fragment>
        )
    }
}

export { MapComponent };
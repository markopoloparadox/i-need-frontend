import React from 'react';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import "../styles/map-component.css"

const POSITION = [46.0224, 16.5463]
const ZOOM = 15;


class MapComponent extends React.Component {
    state = {popups: []}


    componentDidMount() {
    }

    getAllPopups() {
        // Get popups from database
        let p = [[46.0224, 16.5463], [46.1224, 16.5463], [46.0224, 16.4463], [46.0224, 16.6463]];
        let arr = p.map((el, ind) => {
            return <Marker position={el} key={ind}>
                <Popup>A cool popup at location {el[0]} and {el[1]}</Popup>
            </Marker>
        });

        console.log(arr);
        return arr;

    }

    render() {
        return (
            <Map center={POSITION} zoom={ZOOM}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {this.getAllPopups()}
            </Map>
        )
    }
}

export default MapComponent;
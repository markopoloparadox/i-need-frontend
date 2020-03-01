import React from 'react';
import MapComponent from "./map-component"
import PersonPage from "./person-page"

import "../styles/map-component.css"

class JobPage extends React.Component {
    render() {
        return (
            <div className="divTest">
                <MapComponent />
                <PersonPage />
            </div>
        )
    }
}

export { JobPage };
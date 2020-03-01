import React from 'react';
import JobsList from "./jobs-list"

import "../styles/display-page.css"

class DisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section">
                <div className="centerText">
                    <div className="logoText">
                        <h1><span className="logoTextOutline"> Treba mi... </span></h1>
                    </div>
                    <JobsList/>
                </div>
                <div className="video">
                    <video autoPlay loop muted>
                        <source src="video.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        )
    }
}

export default DisplayPage;
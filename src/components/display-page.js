import React from 'react';
import "../styles/display-page.css"

class DisplayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section">
                <div className="centerText">
                    <div>
                        <h1><span> Ja Trebam... </span></h1>
                    </div>

                    <div className="jobs">
                        <h2>Fizera</h2>
                        <h2>Automehanicara</h2>
                        <h2>Zidara</h2>
                        <h2>Vodoinstalera</h2>
                        <h2>Brava</h2>
                        <p>Hello</p>
                    </div>
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
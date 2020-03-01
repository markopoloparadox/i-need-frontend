// Imports
import React from 'react';
import "../../styles/frontPage/backgroundVideo.css"

// Definition
class BackgroundVideo extends React.Component {
    render() {
        return (
            <div className="backgroundvideo">
                <video autoPlay loop muted>
                    <source src="video.mp4" type="video/mp4"></source>
                </video>
            </div>
        )
    }
}

//Exports
export { BackgroundVideo };
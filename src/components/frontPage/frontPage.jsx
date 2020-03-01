// Imports
import React from 'react';
import { BackgroundVideo } from "./backgroundVideo.jsx";
import { Title } from "./title.jsx";
import { JobsList } from "./jobsList.jsx";
import "../../styles/frontPage/frontPage.css"

// Defintion
class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <BackgroundVideo />
                <div className="container">
                    <Title />
                    <JobsList />
                </div>

            </div>
        )
    }
}

//Export
export { FrontPage };
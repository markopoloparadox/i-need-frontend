// Imports
import React from 'react';
import { MapComponent } from "./mapComponent.jsx"
import { InfoComponent } from "./infoComponent.jsx"
import "../../styles/backPage/backPage.css"

// Defintion
class BackPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false }
        this.MarkerClicked = this.MarkerClicked.bind(this);
    }

    MarkerClicked(val) {
        console.log(val);
        console.log(this);
        this.setState({isClicked: true});
    }

    render() {
        return (
            <React.Fragment>
                <MapComponent markerClicked={this.MarkerClicked} />
                {this.state.isClicked ? <InfoComponent /> : null}
            </React.Fragment>
        )
    }
}

//Export
export { BackPage }; 





/* // Imports
import React from 'react';
import { motion } from "framer-motion"

// Defintion
class BackPage extends React.Component {


    render() {
        return (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 10 }}>
                <h1>Hello World</h1>
            </motion.div>
        )
    }
}

//Export
export { BackPage }; */
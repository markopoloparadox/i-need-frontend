// Imports
import React from 'react';
import { Database } from "../database.js";

class JobsList extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    async componentDidMount() {
        let databaseJobs = [];

        try {
            databaseJobs = await Database.GetJobs();
        } catch (err) {
            console.log(err);
        }

        let buttons = databaseJobs.map((el) => {
            return <button key={el.id} id={el.id} onClick={this.onClick}> {el.name} </button>
        });

        this.setState({ jobs: buttons });
    }

    onClick(e) {
        window.location.href = "map/" + e.target.id;
    }

    render() {
        Database.GetJobs();

        return (
            <div>
                {this.state.jobs}
            </div>
        )
    }
}

export { JobsList };
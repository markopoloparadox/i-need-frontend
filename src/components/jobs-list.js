import React from 'react';

import "../styles/jobs-list.css"

class JobsList extends React.Component {
    state = { jobs:[] };

/*     constructor(props) {
        super(props);
    } */

    componentDidMount() {
        // Read from database
        let jobs = ["Fizer", "Mehanicar", "Pilot", "Zidar", "Vozac", "Vodoinstaler"];
        this.setState({jobs});

        this.handleClick = this.handleClick.bind(this);
    }

    getRandomColorCombination() {
        let pairs = 
        [["#F96167", "#FCE77D"], ["#F9D342", "#292826"], ["#DF678C", "#3D155F"],
         ["#CCF381", "#4831D4"], ["#4A274F", "#F0A07C"], ["#EF5455", "#FAD744"],
         ["#FFF748", "#3C1A5B"], ["#2F3C7E", "#FBEAEB"], ["#EC4D37", "#1D1B1B"],
         ["#8BD8BD", "#243665"], ["#141A46", "#EC8B5E"], ["#FFFFFF", "#8AAAE5"],
         ["#295F2D", "#FFE67C"], ["#F4A950", "#161B21"], ["#EB2188", "#080A52"],
         ["#4A171E", "#E2V144"], ["#D2302C", "#F7F7F9"], ["#358597", "#F4A896"],
         ["#E7D045", "#A04EF6"], ["#262223", "#DDC6B6"]];

        return pairs[Math.floor(Math.random() * pairs.length)]

    }

    handleClick(e, ab)
    {
        //e.preventDefault();
        console.log('The link was clicked.');
        console.log(e);
        console.log(this);
        console.log(ab);
    }

    getListOfJobs() {
        let arr = this.state.jobs.map((el) =>  { 
            let [textColor, backgroundColor] = this.getRandomColorCombination();
            if ((Math.floor(Math.random() * 2) == 0)) {
                let a = textColor;
                textColor = backgroundColor;
                backgroundColor = a;
            }


            const bStyle = {
                color: textColor,
                backgroundColor: backgroundColor,
            }
            return <button key={el} style={bStyle} onClick={this.handleClick.bind(this, el)}>{el}</button>; 
        });

        return arr;
    }

    render() {
        return (
            <div className="btn-group">
                {this.getListOfJobs()}
            </div>
        )
    }
}

export default JobsList;
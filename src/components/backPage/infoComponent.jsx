// Imports
import React from 'react';
import "../../styles/backPage/infoComponent.css"

// Defintion
class InfoComponent extends React.Component {

    constructor(props) {
        super(props);

        this.GetBusinessAddress = this.GetBusinessAddress.bind(this);
        this.GetBusinessName = this.GetBusinessName.bind(this);
        this.GetBusinessAvatar = this.GetBusinessAvatar.bind(this);
    }

    GetBusinessAvatar() {
        return <img src="https://i.etsystatic.com/17285564/r/il/b2f6e3/1616495646/il_fullxfull.1616495646_gzhe.jpg"></img>
    }

    GetBusinessName() {
        return <h2>GloriaAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
    }

    GetBusinessAddress() {
        return <h2>Potocka ulica 61</h2>
    }


    render() {
        return (
            <React.Fragment>
                {/* Background box */}
                <div className="backgroundBox">
                    {this.GetBusinessAvatar()}
                    {this.GetBusinessName()}
                    {this.GetBusinessAddress()}
                </div>
            </React.Fragment>
        )
    }
}

//Export
export { InfoComponent }; 


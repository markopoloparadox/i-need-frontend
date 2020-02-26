import React from 'react';

class PersonForm extends React.Component {
    state = { name: "", surname: "", birthDate: "", biography: "" };

    constructor(props) {
        super(props);

        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleBirthDate = this.handleBirthDate.bind(this);
        this.handleBiography = this.handleBiography.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleName(event) {
        this.state.name = event.target.value;
        this.setState(this.state);
    }
    handleSurname(event) {
        this.state.surname = event.target.value;
        this.setState(this.state);
    }
    handleBirthDate(event) {
        this.state.birthDate = event.target.value;
        this.setState(this.state);
    }
    handleBiography(event) {
        this.state.biography = event.target.value;
        this.setState(this.state);
    }

    async databaseSubmit() {
        let submitObj = {};
        submitObj.name = this.state.name;
        submitObj.surname = this.state.surname;
        submitObj.birthDate = this.state.birthDate;
        submitObj.biography = this.state.biography;

        let jsonSubmitObj = JSON.stringify(submitObj);
        console.log(jsonSubmitObj);

        try {
            const response = await fetch("http://localhost:8000/person/add", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: jsonSubmitObj
            });
            const res = await response.json();
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        this.databaseSubmit();
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>
                        Ime:
                    <input type="text" value={this.state.name} onChange={this.handleName} />
                    </label>
                    <br />
                    <label >
                        Prezime:
                    <input type="text" value={this.state.surname} onChange={this.handleSurname} />
                    </label>
                    <br />
                    <label >
                        Datum rođenja:
                    <input type="date" value={this.state.birthDate} onChange={this.handleBirthDate} />
                    </label>
                    <br />
                    <label >
                        Biografija:
                    <input type="text" value={this.state.biography} onChange={this.handleBiography} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PersonForm;
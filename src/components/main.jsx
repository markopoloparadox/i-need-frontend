// Imports
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { FrontPage } from "./frontPage/frontPage.jsx";
import { JobPage } from "./job-page.js";

// Defintion
class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={FrontPage} />
                    <Route path="/map/:id" exact component={JobPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

//Export
export { Main };
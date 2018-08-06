import React from "react";
import {BrowserRouter as Router,
        Route, Switch} from "react-router-dom";
import {App} from "./components/App";

export default function Routes() {
    return (
        <Router>
            <App>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
            </App>
        </Router>
    )
} 
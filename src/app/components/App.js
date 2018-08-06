import React from "react";
import UserList from "./UserList";
//for ajax calls
import 'whatwg-fetch'


export class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }
   
    render() {
        return (
            <div>
            <UserList />
            </div>
        )
    }
}

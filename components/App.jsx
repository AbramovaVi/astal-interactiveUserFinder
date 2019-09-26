import React, { Component } from 'react';

import UserList from "./UserList";
import InputForm from "./InputForm"

class App extends Component {
    render() {

        return (
            <>
                <h3>User Finder</h3>
                <InputForm />
            </>
        );
    }
}

export default App;

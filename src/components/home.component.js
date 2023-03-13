import React, { Component } from 'react';
import Login from "./googleaccount.component";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3> Welcome To ajfjkasdfg</h3>
                <p> Your appointment information is synced to your Google account</p>
                <Login></Login>
            </div>
            
        )
    }
}
import React, { Component } from 'react';
import UserLogin from "./googleaccount.component";


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3> Welcome To ajfjkasdfg</h3>
                <p> Please login with your Google account</p>
                <UserLogin></UserLogin>
            </div>
            
        )
    }
}
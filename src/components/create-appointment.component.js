import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAppointment extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            email: "",
            phone: "",
            description: "",
            time: "",
            date: new Date(),
        }
    }

    componentDidMount() {
        this.setState({
        users: ['test user'],
        username: 'test user',
    })}


    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const appointment = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
            time: this.state.time,
            date: this.state.date,
        }

        console.log(appointment) //placeholder

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Create New Appointment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label> 
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user) {
                                        return <option
                                            key={user}
                                            value={user}>{user}
                                            </option>
                                    })
                                }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type='text'
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input type='text'
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type='text'
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Time: </label>
                        <input type='number'
                            required
                            className="form-control"
                            value={this.state.time}
                            onChange={this.onChangeTime}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onchange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Appointment" className="btn btn-primary" />
                </div>
                </form>
            </div>
            )
        }
}
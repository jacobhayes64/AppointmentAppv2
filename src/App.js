import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar.component.js"
import AppointmentList from  "./components/appointment-list.component.js"
import EditAppointment from  "./components/edit-appointment.component.js"
import CreateAppointment from  "./components/create-appointment.component.js"
import CreateUser from  "./components/create-user.component.js"

function App() {
  return (
    <Router>
      <Navbar />
        <br/>
      <Route path="/" exact element={AppointmentList} />
      <Route path="/edit/:id" component={EditAppointment} />
      <Route path="/create" component={CreateAppointment} />
      <Route path="/user" component={CreateUser} />
    </Router>

  );
}
export default App;
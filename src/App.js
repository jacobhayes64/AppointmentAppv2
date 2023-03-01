import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar.component"
import AppointmentList from  "./components/appointment-list.component"
import EditAppointment from  "./components/edit-appointment.component"
import CreateAppointment from  "./components/create-appointment.component"
import CreateUser from  "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar />
      
      <Route path="/" exact component={AppointmentList} />
      <Route path="/edit/:id" component={EditAppointment} />
      <Route path="/create" component={CreateAppointment} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}
export default App;

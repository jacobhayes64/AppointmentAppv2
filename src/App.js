import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component.js"
import AppointmentList from  "./components/appointment-list.component.js"
import EditAppointment from  "./components/edit-appointment.component.js"
import CreateAppointment from  "./components/create-appointment.component.js"
import CreateUser from  "./components/create-user.component.js"

function App() {
  return (
   /* <Router>
      <Navbar />
        <br/>
      <Route path="/" exact element={AppointmentList} />
      <Route path="/edit/:id" component={EditAppointment} />
      <Route path="/create" component={CreateAppointment} />
      <Route path="/user" component={CreateUser} />
    </Router>
      */
    
    <Router>
      <div className="container">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<AppointmentList />} />
          <Route path="/edit/:id" element={<EditAppointment />} />
          <Route path="/create" element={<CreateAppointment />} />
          <Route path="/user" element={<CreateUser />} />
          <Route Path="/login" element={<login />} />
        </Routes>
      </div>
      </div>
    </Router>

  );
}
export default App;
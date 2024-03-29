import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/navbar.component.js"
import AppointmentList from  "./components/appointment-list.component"
import EditAppointment from  "./components/edit-appointment.component.js"
import CreateAppointment from  "./components/create-appointment.component.js"
import Home from './components/home.component.js';

function App() {


  return (
    
    <Router>

      <div className="container">
      <Navbar />
      <div className="navbar">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/edit/:id" element={<EditAppointment />} />
          <Route path="/create" element={<CreateAppointment />} />

        </Routes>
        
      </div>

      </div>
    </Router>

  );
}
export default App;
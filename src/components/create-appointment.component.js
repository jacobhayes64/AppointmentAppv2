import React, {useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

function AppointmentForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ name, email, phone, description, date, time });
      // Handle form submission here
    }
    return (
        
        <form onSubmit={handleSubmit}>
        <br/>
        <h5>Create an Appointment</h5>
          <div className="formgroup">
              <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
          </div><br/>
          <div className="formgroup">
              <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
          </div><br/>
          <div className="formgroup">
             <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
                />
          </div><br/>
          <div className="formgroup">
          <label>Description:</label>
            <br/> <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </div><br/>
          <div className="formgroup">
          <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div><br/>
          <div className="formgroup">
          <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
          </div><br/>
          <button style={{padding: "5px",}} type="submit">Submit</button>
        </form>
      );
    }
    
    export default AppointmentForm;
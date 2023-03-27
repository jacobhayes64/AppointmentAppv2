import React, {useState, useContext } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector, createSelectorHook } from 'react-redux';
function AppointmentForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");


    var userState = useSelector((user) => user.user[0]);

  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ name, email, phone, description, date, time });
      // Handle form submission here
    }

    return (
      <div>
        <h6 style={{display: "inline"}}>Welcome {userState.name}</h6>
        <img src={userState.picture} style={{height:30, width:30}} ></img>
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
        </div>

      );


    }

    export default AppointmentForm;
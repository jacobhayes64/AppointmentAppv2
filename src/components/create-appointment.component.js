import React, {useState, useContext, useEffect, ReactDOM } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector, createSelectorHook } from 'react-redux';
import { useNavigate } from "react-router-dom";
function AppointmentForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    let navigate = useNavigate()

    var userState = useSelector((user) => user.user[0]);
    if (userState == undefined){
      var userloaded = false
    }
    else {var userloaded = true}
    useEffect(() => {
    if (userState == undefined) {
      navigate("/");
    } else{
    }
  },[]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ name, email, phone, description, date, time });

      axios.post('http://localhost:5000/appointments/add', )
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
      // Handle form submission here
    }

    return (
      <div>
        
        {userloaded ? (<div className="userinfo">
          <h6 style={{display: "inline"}}>Hello👋 {userState.name}</h6>
          <img src={userState.picture} style={{height:30, width:30}}></img>
          </div>
          ): (<h3>Log in please</h3>)
          
        
        }


        
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
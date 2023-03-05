import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

class AppointmentCalendar extends Component {
    state = {
      events: [
        {
          start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        }
      ]
    };

    render() {
        return (
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
            />
        );
      }
    }
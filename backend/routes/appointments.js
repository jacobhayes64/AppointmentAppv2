const router = require('express').Router();
let Appointment = require('../models/appointments.model');

router.route('/').get((req, res) => {
    Appointment.find()
        .then(appointments => res.json(appointments))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const description = req.body.description
    const time = Number(req.body.time);
    const date = Date.parse(req.body.date)
    
    const newAppointment = new Appointment({
        username,
        email,
        phone,
        description,
        time,
        date,
    });

    newAppointment.save()
        .then(() => res.json('Appointment added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
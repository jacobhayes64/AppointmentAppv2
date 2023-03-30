const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    username: {type: String, required: true },
    email: {type: String, required: true },
    phone: {type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true},
    date: { type: Date, required: true},
 }, {
    timestampes: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
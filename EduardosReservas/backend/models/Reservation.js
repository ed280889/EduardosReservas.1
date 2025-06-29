const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  customerName: String,
  tableNumber: Number,
  time: Date
});

module.exports = mongoose.model('Reservation', reservationSchema);

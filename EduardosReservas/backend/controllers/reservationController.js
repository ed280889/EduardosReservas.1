const Reservation = require('../models/Reservation');

const getReservations = async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
};

const createReservation = async (req, res) => {
  const { customerName, tableNumber, time } = req.body;
  const reservation = new Reservation({ customerName, tableNumber, time });
  await reservation.save();
  res.status(201).json(reservation);
};

module.exports = { getReservations, createReservation };

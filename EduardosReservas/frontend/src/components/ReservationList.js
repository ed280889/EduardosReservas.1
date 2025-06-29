import React, { useEffect, useState } from 'react';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => console.error('Error al cargar reservas:', err));
  }, []);

  if (!reservations.length) return <p>No hay reservas.</p>;

  return (
    <ul>
      {reservations.map(r => (
        <li key={r._id}>
          {r.customerName} - Mesa {r.tableNumber} - {new Date(r.time).toLocaleString()}
        </li>
      ))}
    </ul>
  );
};

export default ReservationList;

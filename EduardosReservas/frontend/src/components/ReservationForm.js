import React, { useState } from 'react';
import './ReservationForm.css';  // <-- Importar estilos

const ReservationForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!customerName || !tableNumber || !time) {
      alert('Completa todos los campos');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName,
          tableNumber: Number(tableNumber),
          time
        })
      });
      if (res.ok) {
        alert('Reserva creada');
        setCustomerName('');
        setTableNumber('');
        setTime('');
        window.location.reload();
      } else {
        alert('Error al crear reserva');
      }
    } catch (err) {
      alert('Error de red');
      console.error(err);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número de mesa"
        value={tableNumber}
        onChange={e => setTableNumber(e.target.value)}
      />
      <input
        type="datetime-local"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <button type="submit">Crear Reserva</button>
    </form>
  );
};

export default ReservationForm;

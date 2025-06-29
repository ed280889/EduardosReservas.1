import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ReservationList from './components/ReservationList';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>EduardosReservas</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>Usuarios</h2>
        <UserForm />
        <UserList />
      </section>

      <section>
        <h2>Reservas</h2>
        <ReservationForm />
        <ReservationList />
      </section>
    </div>
  );
}

export default App;

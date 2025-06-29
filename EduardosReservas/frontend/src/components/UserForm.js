import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name || !email) {
      alert('Completa todos los campos');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      if (res.ok) {
        alert('Usuario creado');
        setName('');
        setEmail('');
        // Opcional: recargar lista o emitir evento
        window.location.reload();
      } else {
        alert('Error al crear usuario');
      }
    } catch (err) {
      alert('Error de red');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Crear Usuario</button>
    </form>
  );
};

export default UserForm;

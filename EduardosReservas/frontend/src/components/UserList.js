import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error al cargar usuarios:', err));
  }, []);

  if (!users.length) return <p>No hay usuarios.</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;

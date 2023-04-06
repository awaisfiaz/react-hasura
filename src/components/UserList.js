import React from "react";

const UserList = ({ users, handleUpdate, handleDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => handleUpdate(user)}>Update</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;

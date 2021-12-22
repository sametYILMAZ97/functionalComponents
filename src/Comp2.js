import React, { useState } from "react";

const Comp2 = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div className="container2">
      <button onClick={fetchData} className="btn2">Users City: </button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.address.city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comp2;

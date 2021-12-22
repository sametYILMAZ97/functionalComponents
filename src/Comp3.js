import React, { useState } from "react";

const Comp3 = () => {
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
    <div className="container3">
      <button onClick={fetchData} className="btn3">Company Name: </button>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.company.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comp3;

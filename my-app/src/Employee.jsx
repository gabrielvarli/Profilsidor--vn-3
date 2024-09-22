
import React from 'react';
import Profile from './Profile';

function Employee() {
  
  const employees = [
    { firstName: "John", lastName: "Doe", age: 28, hobby: "Reading" },
    { firstName: "Jane", lastName: "Smith", age: 32, hobby: "Traveling" },
    { firstName: "Michael", lastName: "Johnson", age: 24, hobby: "Gaming" },
    { firstName: "Emily", lastName: "Davis", age: 30, hobby: "Cooking" },
    { firstName: "William", lastName: "Brown", age: 26, hobby: "Hiking" },
  ];

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            <Profile person={employee} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employee;


// import React from 'react';
// import './App.css';
// import Employee from './Employee';

// function App() {
//   return (
//     <div className="App">
//       <h1>Övningsuppgift 3</h1>
//       <Employee />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Profile from './Profile';
import './App.css';
import DarkModeToggle from './DarkModeToggle';

function App() {
  const profiles = [
    { firstName: "John", lastName: "Doe", age: 28, hobby: "Reading" },
    { firstName: "Jane", lastName: "Smith", age: 32, hobby: "Traveling" },
    { firstName: "Michael", lastName: "Johnson", age: 24, hobby: "Gaming" },
    { firstName: "Emily", lastName: "Davis", age: 30, hobby: "Cooking" },
    { firstName: "William", lastName: "Brown", age: 26, hobby: "Hiking" },
  ];

  return (
    <div className="App">
      <DarkModeToggle />
      <h1>Employee Profiles</h1>
      {profiles.map((person, index) => (
        <Profile key={index} person={person} />
      ))}
    </div>
  );
}

export default App;

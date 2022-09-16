import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';
import { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random.toString() }]
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;

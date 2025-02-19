import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: 'An', age: 30 },
    { name: 'Dung', age: 49 },
    { name: 'Hoang', age: 17 },
    { name: 'Chien', age: 32 },
  ]);

  const handleAddUser = (name, age) => {
    setUsers([...users, { name, age }]);
  };

  const handleStatus = () => {
    setStatus(!status);
  }

  const [status, setStatus] = useState(true);

  return (
    <>
      <Form onAddUser={handleAddUser}/>
      <button onClick={handleStatus} style={{backgroundColor: 'transparent', outline: 'none'}}>{status ? 'Hide' : 'Show'} list your user</button>
      {status && <UserList users={users}/>}
    </>
  );
}

export default App;

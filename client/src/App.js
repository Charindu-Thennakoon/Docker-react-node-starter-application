import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>all users</h1>
        {users && users.map(user => (
          <div> id={user.id} name={user.name} address={user.address}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
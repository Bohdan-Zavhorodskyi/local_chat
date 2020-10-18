import React, { useState } from 'react';
import Chat from './Chat';
import './App.css';

function App() {
  const [users, setUsers] = useState(
    [
      { name: 'User1' },
      { name: 'User2' },
    ]);
  const [messages, setMessages] = useState([]);


  return (
    <div className="App">
      {users.map((user, i) => (
        <Chat key={i} name={user.name} setMessages={setMessages} messages={messages} />
      ))}
    </div>
  );
}

export default App;

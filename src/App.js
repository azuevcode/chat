import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const App = () => {
  const [messages, setMessages] = useState([]);
  const [typeValue, setTypeValue] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
  }, []);

  useEffect(() => {
    socket.on('new message', (message) => {
      const newMessages = [...messages, message];
      setMessages(newMessages);
    });

    return () => {
      socket.off('new message');
    };
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!typeValue) return;
    
    socket.emit('message', typeValue);
    setTypeValue('');
  }

  return (
    <div>
      <div>{messages.map(message => <div>{`${message}\n`}</div>)}</div>
      <hr />
      <form>
        <input
          placeholder='Type something...'
          value={typeValue}
          onChange={(e) => setTypeValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Отправить сообщение</button>
      </form>
    </div>
  );
};

export default App;

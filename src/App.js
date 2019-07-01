import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { SOCKET_CONNECTION_URL } from './constants/client';
import {
  CLIENT_CONNECTION,
  MESSAGE_RECEIVED,
  MESSAGE_SENT,
} from './constants/socketEvents';

import AvatarArea from './components/AvatarArea';
import MessageArea from './components/MessageArea';
import { Typebar } from './components/ui';

import { useAppStyles } from './styles';

const socket = io(SOCKET_CONNECTION_URL);

const App = () => {
  const [messages, setMessages] = useState([]);
  const [typeValue, setTypeValue] = useState('');
  const classes = useAppStyles();

  useEffect(() => {
    socket.on(CLIENT_CONNECTION, () => {
      console.log('connected');
    });
  }, []);

  useEffect(() => {
    socket.on(MESSAGE_RECEIVED, (message) => {
      const newMessages = [...messages, message];
      setMessages(newMessages);
    });

    return () => {
      socket.off(MESSAGE_RECEIVED);
    };
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!typeValue) return;

    socket.emit(MESSAGE_SENT, typeValue);
    setTypeValue('');
  }

  return (
    <div className={classes.container}>
      <AvatarArea />
      <MessageArea messages={messages} />
      <Typebar
        buttonTitle='Отправить'
        placeholder='Напишите сообщение...'
        value={typeValue}
        onChange={(e) => { setTypeValue(e.target.value); }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;

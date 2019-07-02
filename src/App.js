import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Grid from '@material-ui/core/Grid';

import { SOCKET_CONNECTION_URL } from './constants/client';
import {
  CLIENT_CONNECTION,
  MESSAGE_RECEIVED,
  MESSAGE_SENT,
  USER_JOIN,
} from './constants/socketEvents';

import AvatarArea from './components/AvatarArea';
import MessageArea from './components/MessageArea';
import { Typebar } from './components/ui';

import { useGlobalStyles, useAppStyles } from './styles';

const socket = io(SOCKET_CONNECTION_URL);

const App = () => {
  const [userId, setUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [typeValue, setTypeValue] = useState('');

  useGlobalStyles();
  const classes = useAppStyles();

  useEffect(() => {
    socket.on(USER_JOIN, (clientId) => {
      setUser(clientId);
    });
  }, []);

  useEffect(() => {
    socket.on(MESSAGE_RECEIVED, ({ message, user }) => {
      const newMessages = [...messages, { message, isMine: user === userId }];
      setMessages(newMessages);
    });

    return () => {
      socket.off(MESSAGE_RECEIVED);
    };
  }, [messages, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!typeValue) return;

    socket.emit(MESSAGE_SENT, typeValue);
    setTypeValue('');
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <AvatarArea />
      <MessageArea messages={messages} />
      <Typebar
        buttonTitle='Отправить'
        placeholder='Напишите сообщение...'
        value={typeValue}
        onChange={(e) => { setTypeValue(e.target.value); }}
        onSubmit={handleSubmit}
      />
    </Grid>
  );
};

export default App;

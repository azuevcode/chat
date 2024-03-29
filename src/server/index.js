// создадим сервер
const {
    SERVER_CONNECTION,
    MESSAGE_SENT,
    MESSAGE_RECEIVED,
    USER_JOIN,
} = require('../constants/socketEvents');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

// обрабатываем подключение к серверу
io.on(SERVER_CONNECTION, (client) => {
  client.emit(USER_JOIN, client.id);

  client.on(MESSAGE_SENT, (data) => {
      io.emit(MESSAGE_RECEIVED, { message: data, user: client.id });
  });
});

// прослушиваем порт
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Осуществляется прослушивание порта ${port}...`);
});


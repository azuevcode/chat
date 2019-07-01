// создадим сервер
const {
    SERVER_CONNECTION,
    MESSAGE_SENT,
    MESSAGE_RECEIVED,
} = require('../constants/socketEvents');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

// обрабатываем подключение к серверу
io.on(SERVER_CONNECTION, (client) => {
    console.log('server connected', client.id);

    client.on(MESSAGE_SENT, (data) => {
        io.emit(MESSAGE_RECEIVED, data);
    });
});

// прослушиваем порт
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Осуществляется прослушивание порта ${port}...`);
});


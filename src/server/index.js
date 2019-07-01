// создадим сервер
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

// обрабатываем подключение к серверу
io.on('connection', (client) => {
    console.log('server connected', client.id);

    client.on('message', (data) => {
        io.emit('new message', data);
    });
});

// прослушиваем порт
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Осуществляется прослушивание порта ${port}...`);
});


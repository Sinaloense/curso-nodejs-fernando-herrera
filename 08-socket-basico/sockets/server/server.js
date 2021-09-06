const path      = require('path');
const http      = require('http');

const express   = require('express');
const socketIO  = require('socket.io');

// Puerto
const port = process.env.PORT || 3000;

// Directorio publico
const publicPath = path.resolve(__dirname, '../public');

// Servidor web express
const app       = express();
const server    = http.createServer(app);

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log(`Servidor corriendo en puerto ${ port }`);
});

// IO = Comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');
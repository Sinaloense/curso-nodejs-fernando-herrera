const path = require('path');

const express = require('express');

// Servidor web express
const app = express();

// Directorio publico
const publicPath = path.resolve(__dirname, '../public');

// Puerto
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, (err) => {
    if (err) {
        throw new Error(err);
    }

    console.log(`Servidor corriendo en puerto ${ port }`);
});
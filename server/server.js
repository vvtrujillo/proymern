const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

//desde aca se colocan las rutas.

require('./config/mongodb.config'); //acá nos conectamos con la BD
require('./routes/jugaodor.route')(app);

//require('./routes/material.routes')(app); //acá tenemos las rutas de las API


app.listen(port, () => console.log('Servidor arriba en el puerto ' + port));
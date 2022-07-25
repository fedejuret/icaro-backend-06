const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Seteamos ejs como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes/products'));

app.listen(3000, () => console.log('Servidor en puerto 3000'));
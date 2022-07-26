const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

app.use(morgan("combined"));

// Seteamos ejs como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/products'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    return res.status(500).json({
        error: err.message
    });

});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
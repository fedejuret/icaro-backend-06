const express = require('express');
const { body } = require('express-validator');
const { renderUploadProductView, renderSuccessProductCreated } = require('../controllers/product');
const router = express.Router();


router.get('/cargar-producto', renderUploadProductView);

/*

    VALIDACION USANDO MIDDLEWARE PROPIOS

*/

// router.post('/cargar-producto-backend', (req, res, next) => {

//     if (!req.body.product_name || req.body.product_name.length < 5) {
//         throw new Error("El producto no cumple las validaciones");
//     }

//     if (!req.body.product_price || req.body.product_price < 2) {
//         throw new Error("El producto esta por debajo de $2");
//     }

//     next();

// },
//     renderSuccessProductCreated
// );

/*

    VALIDACION CON EXPRESS VALIDATOR

*/

// router.post('/cargar-producto-backend',
//     body('product_name').exists().isLength({ min: 5 }).withMessage("El nombre tiene que ser mayor a 5 caracteres"),
//     body('product_price').exists().isInt({
//         gt: 1
//     }).withMessage("El producto esta por debajo de $2"),
//     renderSuccessProductCreated
// );

router.post('/cargar-producto-backend',
    body('product_name').isEmail().withMessage("Coloca un correo valido").custom(value => {

        console.log(value);
        if (value.includes('@gmail.com')) {
            return true;
        }

    }).withMessage('El correo no es admitido'),
    renderSuccessProductCreated
);

// Es una simple funcion | Middleware
router.get('/pepito', (req, res, next) => {

    // Todas nuestras validations

    return res.json({
        data: "Hola que tal"
    });

    next();

}, (req, res) => {

    console.log("Se ejecuto el controlador");

    return res.send('Ruta middleware');

});

module.exports = router;
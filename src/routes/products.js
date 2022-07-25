const express = require('express');
const { renderUploadProductView, renderSuccessProductCreated } = require('../controllers/product');
const router = express.Router();


router.get('/cargar-producto', renderUploadProductView);
router.post('/cargar-producto-backend', renderSuccessProductCreated);


module.exports = router;
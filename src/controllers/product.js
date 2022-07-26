const { validationResult } = require("express-validator");


const renderUploadProductView = (req, res) => {
    return res.render('products');

}

const renderSuccessProductCreated = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        const parsedErrors = errors.array().map(el => el.msg);

        console.log(parsedErrors);

        throw new Error(JSON.stringify(parsedErrors));
    }

    const { product_name, product_description, product_price } = req.body;

    // creacion del producto en base de datos    


    return res.render('product-created', {
        product_name,
        product_description,
        product_price
    });

};

module.exports = {
    renderUploadProductView,
    renderSuccessProductCreated
};
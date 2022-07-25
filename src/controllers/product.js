

const renderUploadProductView = (req, res) => {

    console.log(req.body.product_description);

    return res.render('products');

}

const renderSuccessProductCreated = (req, res) => {

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
/*Manage Products */
exports.products_list = function(req, res) {
    // res.send("Liste des produits");
    res.render('./partials/products_list.ejs', { title : 'Produits'});
}

exports.products_info = function(req, res) {
    // res.send(id = `${req.params.id}`);
    res.render('./partials/product_infos.ejs', { title : `Fiche produit : ${req.params.id}`, id : `${req.params.id}`});

}
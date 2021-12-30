/*Manage Products */
exports.products_list = function(req, res) {
    res.send("Liste des produits");
}

exports.products_info = function(req, res) {
    res.send("Fiche produit : "+ req.params.id)
}
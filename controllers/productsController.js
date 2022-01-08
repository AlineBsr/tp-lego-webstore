/*Manage Products */
const { query } = require('express');
const pm = require('../models/productsManager');

exports.products_list =  function(req, res) {

      pm.all_categories( (resCats) => {
        // console.log(resCats);
        pm.all_products( (resProds) => {
          // console.log(resProds); 
          res.render('../views/partials/products_list.ejs', { title : "Produits", cats : resCats, prods : resProds} )
        });
      })
}

exports.products_info = function(req, res) {
    pm.get_product(req.params.id,(queryResult) => {
    // console.log(queryResult)
      queryResult === undefined  ? res.redirect('/produits') : res.render('./partials/product_infos.ejs', { title : "Fiche produit :"+ req.params.id, id : req.params.id, detailsProd :  queryResult} ); ;
    })
}
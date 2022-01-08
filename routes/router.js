const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const productManager = require('../controllers/productsController')

const { index } = require('../controllers/indexController');
const { products_list, products_info} = require('../controllers/productsController');
const { sign_up } = require('../controllers/userController');

// ROUTER # GET //
router.get('/', index);
router.get('/produits', products_list);
router.get('/produits/:id',products_info);
router.get('/inscription', sign_up);

module.exports = router;
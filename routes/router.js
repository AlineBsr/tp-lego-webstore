const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const indexController = require('../controllers/indexController');
const { products_list, products_info} = require('../controllers/productsController');
const { sign_up, modal_compte} = require('../controllers/userController');

// ROUTER # GET //
router.get('/', indexController.index);
router.get('/produits', products_list);
router.get('/produits/:id', products_info);
router.get('/compte', modal_compte);
router.get('/inscription', sign_up);

module.exports = router;
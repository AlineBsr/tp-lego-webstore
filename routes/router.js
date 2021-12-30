const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const { products_info } = require('../controllers/productsController');
const { products_list } = require('../controllers/productsController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/produits', products_list);
router.get('/produits/:id', products_info);
module.exports = router;

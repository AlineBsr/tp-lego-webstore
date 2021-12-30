const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const { products_info } = require('../controllers/productsController');
const { products_list } = require('../controllers/productsController');
const { sign_up } = require('../controllers/userController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/produits', products_list);
router.get('/produits/:id', products_info);
router.get('/inscription', sign_up);

module.exports = router;

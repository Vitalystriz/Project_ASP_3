const express = require('express')
const router = express.Router({ mergeParams: true });

const productController = require('../controllers/productController')
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

router.get('/:pId', productController.getProductByID);
router.patch('/:pId', productController.updateProductByID);
router.delete('/:pId', productController.deleteProductByID);


module.exports = router
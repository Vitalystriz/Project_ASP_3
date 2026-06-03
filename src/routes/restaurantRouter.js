const express = require('express')
var router = express.Router()

const restaurantController = require('../controllers/restaurantController')
router.get('/', restaurantController.getAllRestaurants);
router.post('/', restaurantController.createRestaurant);

router.get('/:id', restaurantController.getRestaurantByID);
router.patch('/:id', restaurantController.updateRestaurantByID);
router.delete('/:id', restaurantController.deleteRestaurantByID);

const productRouter = require('./productRouter');
router.use('/:id/products', productRouter);

module.exports = router
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router
    .get('/', itemsController.searchItems)
    .get('/:id', itemsController.getItemDetails);

module.exports = router;
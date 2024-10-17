const express = require('express');
const { getAllUsers, getAllProperties, getPropertyById } = require('../controllers/adminController');

const router = express.Router();

router.route('/users').get( getAllUsers);
router.route('/properties').get( getAllProperties);
router.route('/properties/:id').get( getAllProperties);

module.exports = router;

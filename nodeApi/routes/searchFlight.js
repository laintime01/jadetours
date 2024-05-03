const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/', searchController.searchFlights);
router.get('/status', searchController.searchFlightsByStatus);
router.get('/priority', searchController.searchFlightsByPriority);

module.exports = router;

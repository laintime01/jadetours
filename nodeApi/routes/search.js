const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/', searchController.searchTickets);
router.get('/status', searchController.searchTicketsByStatus);
router.get('/priority', searchController.searchTicketsByPriority);

module.exports = router;

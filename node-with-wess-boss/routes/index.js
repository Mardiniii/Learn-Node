const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// Just to import one method from the imported file
const { catchErrors } = require('../handlers/errorHandlers')
// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
// Async/Await with function composition for errors catching
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;

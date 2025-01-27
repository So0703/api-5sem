const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, userController.getUser);
router.put('/', authMiddleware, userController.updateUser);

module.exports = router;

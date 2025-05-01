const express = require('express');
const router = express.Router();
const multer = require('../utils/multer');
const { signup, login } = require('../controllers/authController');

router.get('/signup', (req, res) => res.render('signup'));
router.get('/login', (req, res) => res.render('login'));
router.post('/signup', multer.single('profileImage'), signup);
router.post('/login', login);

module.exports = router;

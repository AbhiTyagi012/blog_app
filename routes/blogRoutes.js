const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const multer = require('../utils/multer');
const { getDashboard, createBlog, updateBlog, deleteBlog,renderEditForm,addComment,addReply } = require('../controllers/blogController');

router.get('/', auth, getDashboard);
router.post('/create', auth, multer.single('image'), createBlog);
router.post('/update/:id', auth, multer.single('image'), updateBlog);
router.post('/delete/:id', auth, deleteBlog);
router.get('/edit/:id', auth, renderEditForm);


module.exports = router;

var express = require('express');
import blogController from '../controller/indexController';
import auth from '../middleware/auth';
var router = express.Router();

/* blog routes */
router.post('/', auth, blogController.createBlog);
router.put('/:id', auth, blogController.updateBlog);
router.delete('/:id', auth, blogController.deleteBlog);
router.get('/', auth, blogController.userBlog);

module.exports = router;

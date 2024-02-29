var express = require('express');
var router = express.Router();
import userController from '../controller/userController';



/* GET users listing. */
router.get('/signup', function(req, res, next) {
    res.json({ message: 'Testing OK' });
  });
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

module.exports = router;

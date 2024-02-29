var express = require('express');
var router = express.Router();
import userController from '../controller/userController';



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({ message: 'User Testing Route Page OK' });
  });
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

module.exports = router;

var express = require('express');
var router = express.Router();

var home = require('./home');





/* GET users listing. */



router.post('/doRegister', home.afterRegister);

router.post('/doLogout' , home.logout);

router.post('/login', home.loginPassport);

router.get('/check',home.checkSession);



module.exports = router;

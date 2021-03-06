const express = require('express');
const router = express.Router();
const userController=require('./controllers/userController')
const{checkAuthorizationMiddleWare,findUserExistence,hasAuthorization} = require('./authHelpers/jwtGenerators')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',userController.login)
router.get('/logout',userController.logout)
router.post('/create-user',userController.createUser)
router.put('/update-user/:id',checkAuthorizationMiddleWare,findUserExistence,hasAuthorization,userController.updateUser)
module.exports = router;

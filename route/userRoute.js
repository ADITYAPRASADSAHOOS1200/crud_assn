const express=require('express');
const route=express.Router();
const {home,LoginUser,registerUser}=require('../controller/usercontrollers.js');

route.post('/login',LoginUser);
route.post('/register',registerUser);
route.get('/',home);

module.exports=route;
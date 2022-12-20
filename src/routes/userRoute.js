//tạo ra các API trong các đối tượng Route

//GET POST PUT DELETE
const express = require('express');
const userRoute = express.Router();
const {signUp, signIn } = require('../controllers/userController');


// SignUp 
userRoute.post("/signUp",signUp);
userRoute.post("/signIn",signIn)

module.exports = userRoute;

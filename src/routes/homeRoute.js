const express = require('express');
const homeRoute = express.Router();
const {getImage, getImageName } = require('../controllers/homeController');
const {verifyToken} = require('../middlewares/baseToken')


// SignUp 
homeRoute.get("/getImage",verifyToken,getImage);
homeRoute.get("/getImageName",verifyToken,getImageName);


module.exports = homeRoute;

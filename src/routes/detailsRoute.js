const express = require('express');
const detailsRoute = express.Router();
const {getImageAndUserCreate, getInfoComment, createCmtOrUnCmt, getInfoSaveImg } = require('../controllers/detailsController');
const {verifyToken} = require('../middlewares/baseToken')

// SignUp 
detailsRoute.get("/getImageAndUserCreate",verifyToken,getImageAndUserCreate);
detailsRoute.get("/getInfoComment",verifyToken,getInfoComment);
detailsRoute.get("/getInfoSaveImg",verifyToken,getInfoSaveImg);
detailsRoute.post("/createCmtOrUnCmt",verifyToken,createCmtOrUnCmt);

module.exports = detailsRoute;

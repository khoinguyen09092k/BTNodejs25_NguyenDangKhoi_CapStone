const express = require('express');
const addRoute = express.Router();
const {addImgUser, updateUser } = require('../controllers/addImages');
const {verifyToken} = require('../middlewares/baseToken')

addRoute.post("/addImgUser",verifyToken,addImgUser);
addRoute.put("/updateUser/:nguoi_dung_id",updateUser);


module.exports = addRoute;

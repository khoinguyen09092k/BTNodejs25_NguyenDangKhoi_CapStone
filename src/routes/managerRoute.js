//tạo ra các API trong các đối tượng Route

//GET POST PUT DELETE
const express = require('express');
const managerRoute = express.Router();
const {getInfoUser, getImgUserCreate, getImgUserSave, deleteImg } = require('../controllers/managerController');
const {verifyToken} = require('../middlewares/baseToken')


// SignUp 
managerRoute.get("/getInfoUser",verifyToken,getInfoUser);
managerRoute.get("/getImgUserCreate",verifyToken,getImgUserCreate);
managerRoute.get("/getImgUserSave",verifyToken,getImgUserSave);
managerRoute.delete("/deleteImg",verifyToken,deleteImg);




module.exports = managerRoute;

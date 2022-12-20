const express = require('express');
const rootRoute = express.Router();
const userRoute = require('./userRoute');
const homeRoute = require('./homeRoute');
const detailsRoute = require('./detailsRoute');
const managerRoute = require('./managerRoute');
const addRoute = require('./addRoute');

rootRoute.use("/user", userRoute);
rootRoute.use("/home", homeRoute);
rootRoute.use("/details", detailsRoute);
rootRoute.use("/manager", managerRoute);
rootRoute.use("/add", addRoute);


module.exports = rootRoute;


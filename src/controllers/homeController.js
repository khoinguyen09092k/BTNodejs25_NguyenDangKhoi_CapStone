const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

// Lấy danh sách ảnh
const getImage = async (req, res) => {
    try {
        let data = await model.hinh_anh.findAll();

        sucessCode(res, data, "Lấy danh sách ảnh thành công")
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}

// lấy danh sách ảnh theo tên người dùng
const getImageName = async (req, res) => {
    try {
        let {ten_hinh} = req.body;
        let checkImgName = await model.hinh_anh.findAll({
            where: {
                ten_hinh: {
                    [Op.like]: `${ten_hinh}%`
                }
            }
        });
        if(checkImgName.length != 0) {

            sucessCode(res, checkImgName, "Lấy dữ liệu thành công")
        }
       else{
        failCode(res,"Không có hình nào có tên như vậy nha")
        };
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}


//commonjs module
module.exports = {
    getImage, getImageName
}
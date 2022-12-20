const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

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
        let data = await model.nguoi_dung.findAll({
            include: ["hinh_anhs"]
        });
        sucessCode(res, data, "Lấy dữ liệu thành công")
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}


//commonjs module
module.exports = {
  getImage,getImageName
}
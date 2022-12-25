const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');
const { where } = require('sequelize');

// lấy thông tin người dùng
const getInfoUser = async (req, res) => {

    try {
        let data = await model.nguoi_dung.findAll()
        sucessCode(res, data, "Lấy dữ liệu thành công")
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}

// lấy danh sách ảnh đã tạo theo user id
const getImgUserCreate = async (req, res) => {
    try {
        let { nguoi_dung_id, hinh_id } = req.body;
        let ImgUserCreate = await model.hinh_anh.findOne({
            where: {
                nguoi_dung_id,
                hinh_id
            }
        });
        if (ImgUserCreate) {

            sucessCode(res, ImgUserCreate, "Lấy danh sách ảnh đã tạo theo ID thành công")
        }
        else {
            failCode(res, "ID người dùng chưa tạo ảnh ")
        }
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}

// lấy danh sách ảnh đã lưu 
const getImgUserSave = async (req, res) => {

    try {
        let { nguoi_dung_id, hinh_id } = req.body;
        let ImgUserSave = await model.luu_anh.findOne({
            where: {
                nguoi_dung_id,
                hinh_id
            }
        });
        if (ImgUserSave) {

            sucessCode(res, ImgUserSave, "Lấy danh sách ảnh đã lưu theo ID thành công")
        }
        else {
            failCode(res, "ID người dùng chưa lưu ảnh ")
        }
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}

// Deleted ảnh đã tạo theo id ảnh

const deleteImg = async (req, res) => {
    try {
        let { hinh_id } = req.body;
        let checkIdImg = await model.hinh_anh.findOne({
            where: {
                hinh_id
            }
        })
        if (checkIdImg) {
            let checkFK1 = await model.luu_anh.findOne({
                where: {
                    hinh_id
                }
            })
            if (checkFK1) {
                let resuilt = await model.luu_anh.destroy({
                    where: {
                        hinh_id
                    }
                });
            }

            let checkFK2 = await model.binh_luan.findOne({
                where: {
                    hinh_id
                }
            })
            if (checkFK2) {
                let resuilt = await model.binh_luan.destroy({
                    where: {
                        hinh_id
                    }
                });
            }

            let resuilt = await model.hinh_anh.destroy({
                where: {
                    hinh_id
                }
            });
            sucessCode(res, resuilt, "Bạn đã xóa hình ảnh thành công !")
        }
        else {
            failCode(res, "Id ảnh bạn muốn xóa ko tồn tại")
        }
    }
    catch (err) {
        errorCode(res, "Lỗi Backend")
    }
}

//commonjs module
module.exports = {
    getInfoUser, getImgUserCreate, getImgUserSave, deleteImg
}
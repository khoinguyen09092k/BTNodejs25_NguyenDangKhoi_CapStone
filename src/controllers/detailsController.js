const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

// Get thông tin ảnh và người tạo ảnh bằng id ảnh
const getImageAndUserCreate = async (req, res) => {
    try {
        let data = await model.hinh_anh.findAll({
            include: ["nguoi_dung_id_nguoi_dung_luu_anhs"]
        });
        sucessCode(res, data, "Lấy dữ liệu thành công")
    } catch (err) {

        errorCode(res, "Lỗi Backend")
    }
}

// Get thông tin bình luận theo ID ảnh
const getInfoComment = async (req, res) => {
    try {
        let { nguoi_dung_id } = req.body;
        let checkUserCmt = await model.binh_luan.findAll({
            where: {
                nguoi_dung_id
            }
        });
        if (checkUserCmt != 0) {

            sucessCode(res, checkUserCmt, "Lấy thông tin bình luận theo id người dùng thành công")
        }
        else {
            failCode(res, "ID không tồn tại")
        }
    } catch (err) {
        console.log(err);
        errorCode(res, "Lỗi Backend")
    }
}

// Người dùng tạo bình luận với hình ảnh

const createCmtOrUnCmt = async (req, res) => {
    try {
        let { nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung } = req.body;
        let checkUserCmt = await model.binh_luan.findOne({
            where: {
                nguoi_dung_id, hinh_id
            }
        })
        if (!checkUserCmt) {
            let resuilt = await model.binh_luan.create({
                nguoi_dung_id,
                hinh_id,
                ngay_binh_luan,
                noi_dung
            });
            sucessCode(res, resuilt, "Bạn đã tạo bình luận cho ảnh thành công !")
        }
        else {
            let resuilt = await model.binh_luan.destroy({
                where: {
                    nguoi_dung_id,
                    hinh_id,
                    ngay_binh_luan,
                    noi_dung
                }
            });
            sucessCode(res, resuilt, "Bạn đã xóa comment thành công !")
        }


    }
    catch (err) {
        errorCode(res, "Lỗi Backend")
    }
}


// get thông tin ảnh này đã dc lưu chưa theo id ảnh  
const getInfoSaveImg = async (req, res) => {
    try {
        let { nguoi_dung_id , hinh_id} = req.body;
        let checkUserSaveImg = await model.luu_anh.findOne({
            where: {
                nguoi_dung_id,
                hinh_id
            }
        });
        if (checkUserSaveImg) {

            sucessCode(res, checkUserSaveImg, "Người dùng đã lưu ảnh này")
        }
        else {
            failCode(res, "ảnh này chưa được lưu")
        }
    } catch (err) {
        console.log(err);
        errorCode(res, "Lỗi Backend")
    }
}



//commonjs module
module.exports = {
    getImageAndUserCreate, getInfoComment, createCmtOrUnCmt,getInfoSaveImg
}
const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');
const nguoi_dung = require('../models/nguoi_dung');

// Get thông tin ảnh và người tạo ảnh bằng id ảnh
const addImgUser = async (req, res) => {
    try {
        let { nguoi_dung_id, anh_dai_dien } = req.body;
        let checkUser = await model.nguoi_dung.findOne({
            where: {
                nguoi_dung_id
            }
        })
        if (checkUser) {
            let resuilt = await model.nguoi_dung.create({
                anh_dai_dien
            });
            sucessCode(res, { nguoi_dung_id, anh_dai_dien }, "Bạn đã thêm ảnh đại diện thành công !")
        }
        else {
            failCode(res, "Không có người dùng nào có ID trên !")
        }
    }
    catch (err) {
        errorCode(res, "Lỗi Backend")
    }
}

// chỉnh sửa thông tin người dùng
const bcrypt = require('bcrypt');
const updateUser = async (req, res) => {
    try {
        let { nguoi_dung_id } = req.params;
        let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
       
        // Mã hóa mật khẩu hash
        let matKhauHash = bcrypt.hashSync(mat_khau, 10);
        let checkUser = await model.nguoi_dung.findOne({
            where: {
                nguoi_dung_id
            }
        });
        if (checkUser) {
        let resuilt =  await model.nguoi_dung.update({
                email,
                mat_khau:matKhauHash,
                ho_ten,
                tuoi,
                anh_dai_dien
            }, {
                where: {
                    nguoi_dung_id
                }
            });
            sucessCode(res, resuilt, "Update user thành công");
        } else {
            failCode(res, "User không tồn tại !");
        }

    } catch (err) {
        console.log("err: ", err);
        errorCode(res, "Lỗi Backend")
    }
}

//commonjs module
module.exports = {
    addImgUser, updateUser
}
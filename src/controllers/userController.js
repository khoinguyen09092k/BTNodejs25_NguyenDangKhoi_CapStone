const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');
const nguoi_dung = require('../models/nguoi_dung');
const { parseToken } = require('../../src/middlewares/baseToken')

// các hàm xử lý chức năng ở BE chứa trong thư mục controllers


//đăng nhập tài khoản
const signIn = async (req, res) => {
    try {
        let { email, mat_khau } = req.body;

        let checkLogin = await model.nguoi_dung.findOne({
            where: {
                email
            }
        });
        if (checkLogin) {
            let checkPass = bcrypt.compareSync(mat_khau, checkLogin.mat_khau);
            if (checkPass) {
                sucessCode(res, parseToken(checkLogin), "Login thành công");
            }
            else {
                failCode(res, { email, mat_khau }, " Mật khẩu không đúng !")

            }
        } else {
            failCode(res, { email, mat_khau }, " Email không đúng !")
        }

    } catch (err) {
        errorCode(res, "Lỗi Backend")
    }

}

// Đăng Ký
const bcrypt = require('bcrypt');
const signUp = async (req, res) => {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body
    let matKhauHash = bcrypt.hashSync(mat_khau, 10);
    let checkEmail = await model.nguoi_dung.findOne({
        where: {
            email
        }
    })
    if (checkEmail) {
        failCode(res, "email đã tồn tại")
    }
    else {

        let data = await model.nguoi_dung.create({
            email,
            mat_khau: matKhauHash,
            ho_ten,
            tuoi,
            anh_dai_dien
        });
        sucessCode(res, data, "đăng ký tài khoản thành công");
    }
}

//commonjs module
module.exports = {
    signUp, signIn
}
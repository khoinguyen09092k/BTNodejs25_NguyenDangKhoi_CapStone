const jwt = require('jsonwebtoken');



// hàm tạo token 
const parseToken = (data) => {

    let token = jwt.sign({ data: "khoinguyen" }, "khoi0909", { algorithm: "HS256", expiresIn: "10y" }); // HS256
    return token
}


const checkToken = (token) => {
    console.log("token: ", token);

    let checkT = jwt.verify(token, "khoi0909");
    console.log("checkT: ", checkT);

    try {

        if (checkT) {
            return { checkData: true, message: "" }
        }
    }
    catch (error) {
        return { checkData: false, message: error.message };
    }
}

const verifyToken = (req,res,next)=>{
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1]
    const verifyToken = checkToken(token)
    if (verifyToken.checkData) {

        next();
    }
    else {
        res.status(401).send(verifyToken.message);
    }
}

module.exports = {
    parseToken,
    checkToken,
    verifyToken
}
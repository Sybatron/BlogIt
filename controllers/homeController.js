const { request } = require("http");

const { secret } = require("../config/index");
const { jwt } = require("../utils");

module.exports = {
    get: {
        home(req, res, next) {
            let token = req.cookies["x-auth-token"];
            let decodedToken;
            if (token) {
                decodedToken = jwt.verifyToken(token, secret);
            }
            console.log(decodedToken);
            if (decodedToken) {
                // res.render("./home/home.hbs", { user: decodedToken });
            } else {
                res.render("./home/home.hbs");
            }
        },
    },
};

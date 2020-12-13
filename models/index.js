const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const getUserModel = require("./User");

module.exports = {
    User: getUserModel(mongoose, bcrypt),
};

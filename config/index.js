const env = process.env.NODE_ENV || "development";

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: "mongodb://localhost:27017/BlogIt",
        cookie: "x-auth-token",
        secret:
            "e34a6914d72d74c09d8e09054d67853e8ea34e31d2a7958223526f4952be9ee7",
        saltRounds: 11,
    },
};

module.exports = config[env];

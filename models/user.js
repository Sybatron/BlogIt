const { saltRounds } = require("../config");

module.exports = (mongoose, bcrypt) => {
    const { Schema, model: Model } = mongoose;
    const { String, ObjectId } = Schema.Types;

    const userSchema = new Schema({
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        posts: [
            {
                type: ObjectId,
                ref: "Post",
            },
        ],
    });

    userSchema.methods = {
        comparePasswords(password) {
            return bcrypt.compare(password, this.password);
        },
    };

    userSchema.pre("save", function (next) {
        if (!this.isModified("password")) {
            next();
            return;
        }

        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                next(err);
                return;
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            });
        });
    });

    return Model("User", userSchema);
};

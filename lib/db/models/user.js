"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});
var UserModel = (0, mongoose_1.model)("User", exports.UserSchema);
exports.default = UserModel;

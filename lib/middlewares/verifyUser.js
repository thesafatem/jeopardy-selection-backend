"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyUser = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({
            error: 'Not authorized'
        });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(req.headers.authorization, process.env.AUTH_TOKEN_KEY);
        if (!decoded) {
            return res.status(400).json({
                error: 'Invalid token'
            });
        }
        req.user = JSON.parse(JSON.stringify(decoded));
    }
    catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
    next();
};
exports.default = verifyUser;

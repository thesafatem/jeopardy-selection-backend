"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TournamentSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    authorId: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    playersToOut: {
        type: Number
    }
}, {
    timestamps: true
});
var TournamentModel = (0, mongoose_1.model)("Tournament", exports.TournamentSchema);
exports.default = TournamentModel;

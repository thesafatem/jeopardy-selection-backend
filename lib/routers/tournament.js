"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tournament_1 = __importDefault(require("../controllers/tournament"));
var verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
var router = express_1.default.Router();
router.post('/', verifyUser_1.default, tournament_1.default.createTournament);
router.get('/', verifyUser_1.default, tournament_1.default.getTournaments);
router.get('/:id', tournament_1.default.getTournament);
router.put('/:id', tournament_1.default.updateTournament);
router.delete('/:id', tournament_1.default.deleteTournament);
exports.default = router;

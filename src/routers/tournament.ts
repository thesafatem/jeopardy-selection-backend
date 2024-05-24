import express from 'express';
import controller from '../controllers/tournament';
import verifyUser from "../middlewares/verifyUser";

const router = express.Router()

router.post('/', verifyUser, controller.createTournament);
router.get('/', verifyUser, controller.getTournaments);
router.get('/:id', controller.getTournament);
router.put('/:id', verifyUser, controller.updateTournament);
router.delete('/:id', verifyUser, controller.deleteTournament);

router.post('/:id/score', verifyUser, controller.addScore);
router.put('/:id/score', verifyUser, controller.updateScore);
router.delete('/:id/score', verifyUser, controller.deleteScore);

export default router;
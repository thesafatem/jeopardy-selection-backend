import express from 'express';
import controller from '../controllers/tournament';
import verifyUser from "../middlewares/verifyUser";

const router = express.Router()

router.post('/', verifyUser, controller.createTournament);
router.get('/', verifyUser, controller.getTournaments);
router.get('/:id', controller.getTournament);
router.put('/:id', controller.updateTournament);
router.delete('/:id', controller.deleteTournament);

export default router;
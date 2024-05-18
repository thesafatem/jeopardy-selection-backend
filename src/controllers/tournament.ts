import { Request, Response} from "express";
import tournamentService from '../services/tournament';
import {AuthenticatedRequest} from "../middlewares/verifyUser";

const createTournament = async (req: AuthenticatedRequest, res: Response) => {
    const { name, playersToOut } = req.body;
    try {
        const authorId = req.user._id;
        const tournament = {
            name,
            authorId,
            playersToOut
        }
        const createdTournament = await tournamentService.createTournament(tournament);
        return res.status(201).json({
            success: true,
            tournament: createdTournament
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const getTournaments = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const authorId = req.user?._id;
        const tournaments = await tournamentService.getTournaments({ authorId })
        return res.status(200).json({
            tournaments
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const updateTournament = (req: Request, res: Response) => {
    return;
}

const deleteTournament = (req: Request, res: Response) => {
    return;
}

const getTournament = (req: Request, res: Response) => {
    return;
}

export default {
    createTournament,
    updateTournament,
    deleteTournament,
    getTournaments,
    getTournament
}
import { Request, Response } from "express";
import tournamentService from '../services/tournament';
import { isAuthenticated } from "../utils/typeGuards";

const createTournament = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) { return }
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

const getTournaments = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) { return }
    try {
        const authorId = req.user._id;
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
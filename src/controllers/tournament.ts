import { Request, Response } from "express";
import tournamentService from '../services/tournament';
import { isAuthenticated } from "../utils/typeGuards";
import mongoose from "mongoose";

const createTournament = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) { return }
    const { name, playersToOut } = req.body;
    try {
        const authorId = new mongoose.Types.ObjectId(req.user._id);
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
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const getTournaments = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        return res.status(401).json({
            error: 'Not authenticated'
        })
    }
    try {
        const authorId = req.user._id;
        const tournaments = await tournamentService.getTournaments({ authorId })
        return res.status(200).json({
            tournaments
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const updateTournament = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        return res.status(401).json({
            error: 'Not authenticated'
        })
    }
    try {
        const options = req.body;
        const id = req.params.id;
        const userId = req.user._id;
        const tournament = await tournamentService.getTournamentById(id);
        if (String(tournament?.authorId) !== String(userId)) {
            return res.status(403).json({
                error: 'Forbidden'
            })
        }
        const updatedTournament = await tournamentService.updateTournamentById(id, options);
        return res.status(200).json({
            success: true,
            tournament: updatedTournament
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}

const deleteTournament = async (req: Request, res: Response) => {
    if (!isAuthenticated(req)) {
        return res.status(401).json({
            error: 'Not authenticated'
        })
    }
    try {
        const id = req.params.id;
        const userId = req.user._id;
        const tournament = await tournamentService.getTournamentById(id);
        if (String(tournament?.authorId) !== String(userId)) {
            return res.status(403).json({
                error: 'Forbidden'
            })
        }
        await tournamentService.deleteTournamentById(id);
        return res.status(204).json({
            success: true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const getTournament = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const tournament = await tournamentService.getTournamentById(id);
        if (!tournament) {
            return res.status(404).json({
                error: "Not found"
            })
        }
        return res.status(200).json({
            success: true,
            tournament
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}

export default {
    createTournament,
    updateTournament,
    deleteTournament,
    getTournaments,
    getTournament
}
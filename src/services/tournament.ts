import TournamentModel, {ITournament} from "../db/models/tournament";
import {ObjectId} from "mongoose";

const createTournament = async (tournament: ITournament) => {
    const newTournament = new TournamentModel(tournament);
    await newTournament.save();
    return newTournament.toJSON();
}

const getTournaments = (options: object): Promise<ITournament[]> => {
    return TournamentModel.find(options);
}

const getTournamentById = (id: ObjectId): Promise<ITournament | null> => {
    return TournamentModel.findById(id);
}

const updateTournamentById = async (id: ObjectId, options: object) => {
    return TournamentModel.findByIdAndUpdate(id, options);
}

export default {
    createTournament,
    getTournaments,
    getTournamentById,
    updateTournamentById
}
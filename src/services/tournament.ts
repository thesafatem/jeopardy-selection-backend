import TournamentModel, {ITournament} from "../db/models/tournament";

const createTournament = async (tournament: ITournament) => {
    const newTournament = new TournamentModel(tournament);
    await newTournament.save();
    return newTournament.toJSON();
}

const getTournaments = (options: object): Promise<ITournament[]> => {
    return TournamentModel.find(options);
}

const getTournamentById = (id: string): Promise<ITournament | null> => {
    return TournamentModel.findById(id);
}

const updateTournamentById = async (id: string, options: object) => {
    return TournamentModel.findByIdAndUpdate(id, options, { new: true });
}

export default {
    createTournament,
    getTournaments,
    getTournamentById,
    updateTournamentById
}
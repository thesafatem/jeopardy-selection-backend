import TournamentModel, {ITableRow, ITournament} from "../db/models/tournament";
import { Types } from "mongoose";

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

const updateTournamentById = (id: string, options: object) => {
    return TournamentModel.findByIdAndUpdate(id, options, { new: true });
}

const deleteTournamentById = async (id: string) => {
    await TournamentModel.findByIdAndDelete(id);
}

const addTournamentUserScore = (id: string, userId: Types.ObjectId, score: number) => {
    const row: ITableRow = {
        userId,
        score
    }
    return TournamentModel.findByIdAndUpdate(id, {
        $push: {
            table: {
                $each: [ row ],
                $sort: { score: -1 }
            }
        }
    }, { new: true })
}

export default {
    createTournament,
    getTournaments,
    getTournamentById,
    updateTournamentById,
    deleteTournamentById,
    addTournamentUserScore
}
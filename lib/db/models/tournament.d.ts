import { Schema, Model } from "mongoose";
export interface ITournament {
    _id?: Schema.Types.ObjectId;
    name: string;
    authorId: Schema.Types.ObjectId;
    playersToOut: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const TournamentSchema: Schema<ITournament>;
declare const TournamentModel: Model<ITournament>;
export default TournamentModel;

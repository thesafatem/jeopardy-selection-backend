import { Schema, model, Model } from "mongoose";

export interface ITournament {
    _id?: Schema.Types.ObjectId;
    name: string;
    authorId: Schema.Types.ObjectId;
    playersToOut: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export const TournamentSchema: Schema<ITournament> = new Schema<ITournament>(
    {
        name: {
            type: String
        },
        authorId: {
            type: Schema.Types.ObjectId
        },
        playersToOut: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const TournamentModel: Model<ITournament> = model<ITournament>("Tournament", TournamentSchema);

export default TournamentModel;
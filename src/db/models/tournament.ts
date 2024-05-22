import {Schema, model, Model, Types} from "mongoose";

export interface ITournament {
    _id?: Types.ObjectId;
    name: string;
    authorId: Types.ObjectId;
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
            type: Schema.Types.ObjectId,
            ref: "User"
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
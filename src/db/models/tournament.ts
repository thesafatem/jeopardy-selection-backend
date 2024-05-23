import { Schema, model, Model, Types } from "mongoose";

export interface ITableRow {
    userId: Types.ObjectId;
    score: number;
}

export interface ITournament {
    _id?: Types.ObjectId;
    name: string;
    authorId: Types.ObjectId;
    playersToOut: number;
    table: ITableRow[];
    createdAt?: Date;
    updatedAt?: Date;
}

const TableRowSchema: Schema<ITableRow> = new Schema<ITableRow>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        score: {
            type: Number
        }
    },
    {
        _id: false,
        timestamps: false
    }
)

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
        },
        table: {
            type: [TableRowSchema]
        }
    },
    {
        timestamps: true
    }
)

const TournamentModel: Model<ITournament> = model<ITournament>("Tournament", TournamentSchema);

export default TournamentModel;
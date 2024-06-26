import {Schema, model, Model, Types} from "mongoose";

export interface IUser {
    _id: Types.ObjectId;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const UserSchema: Schema<IUser> = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: false
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const UserModel: Model<IUser> = model<IUser>("User", UserSchema);

export default UserModel;
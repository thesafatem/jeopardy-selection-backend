import {Schema, model, Model} from "mongoose";

export interface IUser {
    id: Schema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
}

export const UserSchema: Schema<IUser> = new Schema<IUser>(
    {
        id: {
            type: Schema.Types.ObjectId
        },
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
    }
)

const UserModel: Model<IUser> = model<IUser>("User", UserSchema);

export default UserModel;
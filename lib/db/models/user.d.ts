import { Schema, Model } from "mongoose";
export interface IUser {
    _id: Schema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const UserSchema: Schema<IUser>;
declare const UserModel: Model<IUser>;
export default UserModel;

import {Schema} from "mongoose";

interface IUser {
    _id: Schema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

declare module 'express-serve-static-core' {
    interface Request {
        user: IUser
    }
}

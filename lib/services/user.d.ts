import { IUser } from '../db/models/user';
export declare const getUserByEmail: (email: string) => Promise<IUser | null>;
export declare const createUser: (user: Omit<IUser, "_id">) => Promise<IUser>;

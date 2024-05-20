import {Request} from "express";
import {IUser} from "../db/models/user";

export function isAuthenticated(req: Request): req is Request & { user: IUser } {
    return req.user !== undefined;
}
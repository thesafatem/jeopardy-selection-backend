import { Request, RequestHandler } from "express";
import { IUser } from "../db/models/user";
export interface BaseAuthenticatedRequest extends Request {
    user?: IUser;
}
export interface AuthenticatedRequest extends BaseAuthenticatedRequest {
    user: IUser;
}
declare const verifyUser: RequestHandler;
export default verifyUser;

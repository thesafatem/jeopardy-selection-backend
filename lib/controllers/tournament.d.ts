import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/verifyUser";
declare const _default: {
    createTournament: (req: AuthenticatedRequest, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    updateTournament: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
    deleteTournament: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
    getTournaments: (req: AuthenticatedRequest, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>>>;
    getTournament: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => void;
};
export default _default;

import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from 'jsonwebtoken';

const verifyUser: RequestHandler = (req: Request, res: Response, next: NextFunction): any => {
    if (!req.headers.authorization) {
        return res.status(403).json({
            error: 'Not authorized'
        })
    }
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.AUTH_TOKEN_KEY!);
        if (!decoded) {
            return res.status(400).json({
                error: 'Invalid token'
            })
        }
        req.user = JSON.parse(JSON.stringify(decoded));
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
    next();
}

export default verifyUser;
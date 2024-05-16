import { Request, Response } from 'express';

const register = (req: Request, res: Response) => {
    const { name, email, password } = req.body;
}

const login = (req: Request, res: Response) => {

}

export default {
    register,
    login
}
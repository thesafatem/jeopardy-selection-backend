import { Request, Response } from 'express';
import {createUser, getUserByEmail} from "../services/user";
import bcrypt from 'bcrypt';
import {IUser} from '../db/models/user';
import jwt from 'jsonwebtoken';

const register = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        let user: IUser | null = await getUserByEmail(email);
        if (user) {
            return res.status(400).json({
                error: 'User already exist'
            })
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt);
        user = {
            firstName,
            lastName,
            email,
            password: passwordHash
        }
        const createdUser: IUser = await createUser(user);
        const jwtOptions = {
            expiresIn: '12h'
        }
        const authToken = jwt.sign(createdUser, process.env.AUTH_TOKEN_KEY!, jwtOptions);
        return res.status(201).json({
            success: true,
            user: {
                ...createdUser,
                authToken
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user: IUser | null = await getUserByEmail(email);
        const doesUserExist = !!user
        const isPasswordCorrect = user && await bcrypt.compare(password, user?.password);
        if (!doesUserExist || !isPasswordCorrect) {
            return res.status(400).json({
                error: 'Invalid credentials'
            })
        }
        const jwtOptions = {
            expiresIn: '12h'
        }
        console.log(user);
        const authToken = jwt.sign(user, process.env.AUTH_TOKEN_KEY!, jwtOptions);
        return res.status(200).json({
            success: true,
            user: {
                ...user,
                authToken
            }
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export default {
    register,
    login
}
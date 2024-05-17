import { Request, Response } from 'express';
import {createUser, getUserByEmail} from "../services/user";
import bcrypt from 'bcrypt';
import {IUser} from '../db/models/user';
import jwt from 'jsonwebtoken';

const register = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (user) {
            return res.status(400).json({
                error: 'User already exist'
            })
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt);
        let newUser: IUser = {
            firstName,
            lastName,
            email,
            password: passwordHash
        }
        const createdUser: IUser = await createUser(newUser);
        const jwtOptions = {
            expiresIn: '12h'
        }

        newUser = {
            ...newUser,
            createdAt: createdUser.createdAt,
            updatedAt: createdUser.updatedAt,
            _id: createdUser._id
        }

        const authToken = jwt.sign(newUser, process.env.AUTH_TOKEN_KEY || '', jwtOptions);
        return res.status(201).json({
            success: true,
            user: {
                ...newUser,
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

const login = (req: Request, res: Response) => {
    return true;
}

export default {
    register,
    login
}
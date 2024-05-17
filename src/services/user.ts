import UserModel, {IUser} from '../db/models/user';

export const getUserByEmail = (email: string): Promise<IUser | null> => {
    return UserModel.findOne({email});
}

export const createUser = (user: IUser): Promise<IUser> => {
    return UserModel.create(user);
}
import UserModel, {IUser} from '../db/models/user';

export const getUserByEmail = (email: string): Promise<IUser | null> => {
    return UserModel.findOne({email}).lean();
}

export const createUser = async (user: Omit<IUser, "_id">): Promise<IUser> => {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser.toJSON();
}
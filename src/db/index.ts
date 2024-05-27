import mongoose from 'mongoose';

const getConnectionUri = (): string => {
    return 'mongodb://' +
        process.env.MONGO_USER +
        ':' + process.env.MONGO_PASSWORD +
        '@' + process.env.MONGO_HOST +
        ':' + process.env.MONGO_PORT +
        '/' + process.env.MONGO_DB
}
const createConnection = () => {
    return async (): Promise<void> => {
        try {
            const uri = getConnectionUri()
            await mongoose.connect(uri)
        } catch (error) {
            throw error;
        }
    }
}

export default createConnection
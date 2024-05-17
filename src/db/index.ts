import mongoose from 'mongoose';

const getConnectionUri = (): string => {
    return process.env.MONGO_URI || 'mongodb://telecomUser:password@localhost:27017/telecom'
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
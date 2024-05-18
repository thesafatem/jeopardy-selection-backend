import { Application} from "express";
import authRouter from './auth';
import tournamentRouter from './tournament';

const setRouting = (app: Application) => {
    app.use('/auth', authRouter);
    app.use('/tournaments', tournamentRouter);
}

export default setRouting;
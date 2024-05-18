import express, { Application, json } from "express";
import createConnection from "./db";
import setRouting from "./routers";

import dotenv from 'dotenv';

const app: Application = express();
const connectDb = createConnection();

dotenv.configDotenv();
app.use(json());
setRouting(app);

async function run() {
  try {
    await connectDb()
    app.listen(5000, () => {
      console.log('Server is started on port 5000!')
    })
  } catch (error) {
    process.exit(1)
  }
}

run()
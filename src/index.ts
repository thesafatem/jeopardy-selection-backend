import express, { Application, json } from "express";
import createConnection from "./db";
import authRouter from './routers/auth'

const app: Application = express();
const connectDb = createConnection()

app.use(json())
app.use(authRouter);

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
import express, { Request, Response, Application } from "express";

const app: Application = express();
const router = express.Router();

app.get('/hello', (req: Request, res: Response) => {
  res.end('Hello, world!')
})

app.listen(5000, () => {
  console.log('Server is started on port 5000!')
})
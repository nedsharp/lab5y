import express, { Request, Response } from "express";
import { getDeikstra } from "./dijkstra";

const app = express();

app.use(express.json());
const port = process.env.PORT || 8000;

app.post("/dijkstra", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = getDeikstra(body.graph, body.start);
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

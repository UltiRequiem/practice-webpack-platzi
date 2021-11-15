import { default as express } from "express";
import DataService from "./data";
import {PORT} from "./config";

const app = express();

app.get("/api", (_req, res) => {
  res.json(DataService.products);
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

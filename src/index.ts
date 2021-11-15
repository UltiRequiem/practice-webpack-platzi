import * as express from "express";

const app = express.default();

import { PORT } from "./config";

app.get("/", (req, res) => {
  res.send("Hello Typescript");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

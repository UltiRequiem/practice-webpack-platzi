import express from "express";

const app = express();

import { PORT } from "./config.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});

const express = require("express");
const connect = require("./config/db");
const cors = require('cors');
const notesController = require("./controller/notesController");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config(); // not load in deploy
}

const app = express();
connect();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ word: "Hello Word" });
});

app.post("/notes", notesController.CreateUser);

app.get("/notes", notesController.fetchAllUser);

app.get("/notes/:id", notesController.fetchOneUser);

app.put("/notes/:id", notesController.fetchAndUpdate);

app.delete("/notes/:id", notesController.fetchAndDelete);

app.listen(process.env.PORT);

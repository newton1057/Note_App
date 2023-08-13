const express = require('express');
const morgan = require("morgan");
var cors = require('cors')

const router = require("../Router/Notes.router");
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use("/API_NotesApp/v1", router);

module.exports = app;
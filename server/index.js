const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_SECRETE_URI);
const app = express();
app.use(express.json());

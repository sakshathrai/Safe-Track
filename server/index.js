require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

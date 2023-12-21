require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_SECRETE_URI).then(() => {
  console.log("connected to DB");
});

app.get("/", (req, res) => {
  res.send({ msg: "hii" });
});

app.post("/create-stripe-account", async (req, res) => {
  // const account = await stripe.accounts.create({
  //   type: "express",
  //   country: "US",
  //   email: req.body.email, // Replace with your user's email
  //   capabilities: {
  //     card_payments: { requested: true },
  //     transfers: { requested: true },
  //   },
  // });
  const accountLink = await stripe.accountLinks.create({
    account: "acct_1234567890", // Replace with your user's Stripe account ID
    refresh_url: "https://example.com/reauth",
    return_url: "https://example.com/return",
    type: "account_onboarding",
  });
  console.log(accountLink);
  res.send(accountLink);
});
app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send({ err: "SERVER ERROR" });
});

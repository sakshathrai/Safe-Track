require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRETE = process.env.JWT_SECRETE;
mongoose.connect(process.env.MONGO_SECRETE_URI);
const app = express();
app.use(cors());
app.use(express.json());

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userCountry: {
    type: String,
    required: true,
  },
  userNumber: {
    type: String,
    required: true,
  },
  userPin: {
    type: String,
  },
  userDebitCardInfo: {
    cardNo: String,
    expireDate: String,
    cvv: String,
  },
});
const userModel = mongoose.model("user", userSchema);

async function getUserIdByToken(token) {
  if (token) {
    response = jwt.verify(token, JWT_SECRETE);
    if (!response) return false;
    else {
      const id = response.user.id;
      return id;
    }
  }
}

async function getUserByEmail(userEmail) {
  if (userEmail) {
    const someUser = await mongoose.model("user").findOne({ userEmail });
    return someUser;
  } else {
    return false;
  }
}

app.post("/api/signup", async (req, res) => {
  if (
    !(
      req.body.userName &&
      req.body.userEmail &&
      req.body.userPassword &&
      req.body.userCountry &&
      req.body.userNumber
    )
  ) {
    return res.json({
      success: false,
      fetchError: "Invalid Credential",
    });
  }
  const userEmail = req.body.userEmail;
  const someUser = await getUserByEmail(userEmail);
  if (someUser) {
    return res.json({ success: false, fetchError: "Account already EXists" });
  }
  const user = new userModel({
    ...req.body,
  });

  const response = await user.save();

  const dataForJwtSign = {
    user: {
      id: response._id.toString(),
      name: req.body.userName,
    },
  };
  const authToken = jwt.sign(dataForJwtSign, JWT_SECRETE);
  res.send({ authToken, success: true, userName: req.body.userName });
});

app.post("/api/login", async (req, res) => {
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;
  if (!(userEmail && userPassword)) {
    return res.json({
      success: false,
      fetchError: "Invalid Credential",
    });
  }
  const user = await getUserByEmail(userEmail);
  if (!user || user.userPassword != userPassword) {
    res.send({ success: false, fetchError: "Invalid Credential" });
  } else {
    const authToken = jwt.sign({ user: { id: user._id } }, JWT_SECRETE);
    return res.send({ authToken, success: true });
  }
});

app.post("/api/setuppin", async (req, res) => {
  res.send({ msg: await getUserIdByToken(req.body.token) });
});

app.post("/api/verifypin", (req, res) => {
  res.send();
});

app.get("/api/profile", (req, res) => {
  res.send();
});

app.use((err, req, res, next) => {
  res.status(500).send({ serverError: "Internal Server ERROR" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running");
});

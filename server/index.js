const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_SECRETE_URI);
const app = express();
app.use(express.json());

app.get('/api/setuppin', (req, res) => {
  
  res.send();
});

app.get('/api/signup', (req, res) => {
  
    res.send();
  });

  app.get('/api/verifypin', (req, res) => {
  
    res.send();
  });
  app.get('/api/profile', (req, res) => {
  
    res.send();
  });

    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

  console.log("Server is started running");

});

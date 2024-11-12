// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieRoutes = require('./app/api/cookies/save/route'); // ensure this path is correct

app.use(bodyParser.json());
app.use("/api/cookies", cookieRoutes);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

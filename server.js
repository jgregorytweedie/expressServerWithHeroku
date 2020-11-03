const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  res.status(404);
  res.send("404: file Not Found");
});

const PORT = process.env.port || 3000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

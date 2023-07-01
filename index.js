const express = require("express");
const postroutes = require("./routes/posts.js");

const app = express();
app.use(express.json());
app.use("/api/posts", postroutes);

app.listen(8000, () => {
  console.log('connected');
});

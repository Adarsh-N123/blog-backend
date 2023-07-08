const express = require("express");
const postroutes = require("./routes/posts.js");

const app = express();
app.use(express.json());
app.use("/api/posts", postroutes);
app.get("/api/admins", (req, res) => {
  const data = { admins: ["adarshkln5@gmail.com","atharva.bhanage.20042@iitgoa.ac.in"] };
  res.json(data); // Sending a JSON response
});

app.listen(8000, () => {
  console.log('connected');
});

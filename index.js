const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefsData = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chefs Knife is running...");
});

app.get("/chefs", (req, res) => {
  res.send(chefsData);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefsData.find((cf) => cf.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Chefs knife is running on port: ${port}`);
});

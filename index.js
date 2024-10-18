import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

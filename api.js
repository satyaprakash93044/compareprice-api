const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ComparePrice API is working!"
  });
});

app.post("/compare", async (req, res) => {
  const { product } = req.body;

  if (!product) {
    return res.status(400).json({
      error: "Please enter a product name"
    });
  }

  res.json({
    product: product,
    message: "Product comparison API is ready",
    results: []
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

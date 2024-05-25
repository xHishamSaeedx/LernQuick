const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// API endpoint
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});

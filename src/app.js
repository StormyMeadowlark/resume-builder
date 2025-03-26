const express = require("express");
const cors = require("cors");

// Routes
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Resume Builder API is live!" });
});

// API routes
app.use("/api/resume", resumeRoutes);

module.exports = app;

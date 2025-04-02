const express = require("express");
const cors = require("cors");

// Routes
const resumeRoutes = require("./routes/resumeRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const coverletterRoutes = require("./routes/coverletterRoutes")

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

app.use("/api/upload-resume", uploadRoutes)

app.use("/api/coverletter", coverletterRoutes)

module.exports = app;

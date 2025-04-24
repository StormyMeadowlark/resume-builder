const express = require("express");
const router = express.Router();

const { generateJobDescription } = require("../controllers/jobDescriptionController");

// POST /api/resume → generate a tailored resume
router.post("/", generateJobDescription);

module.exports = router;
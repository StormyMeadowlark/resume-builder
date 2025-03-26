const express = require("express");
const router = express.Router();

const { generateResume } = require("../controllers/resumeController");

// POST /api/resume → generate a tailored resume
router.post("/", generateResume);

module.exports = router;

const express = require("express");
const router = express.Router();

const { generateCoverletter } = require("../controllers/coverletterController");

// POST /api/resume → generate a tailored resume
router.post("/", generateCoverletter);

module.exports = router;

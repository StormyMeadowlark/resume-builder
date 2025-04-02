const express = require("express");
const router = express.Router();
const multer = require("multer");
const { handleUpload } = require("../controllers/uploadController");

// Store files in /uploads/
const upload = multer({ dest: "uploads/" });

// POST /api/upload-resume
router.post("/", upload.single("resume"), handleUpload);

module.exports = router;

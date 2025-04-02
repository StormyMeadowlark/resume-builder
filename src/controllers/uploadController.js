const { extractTextFromFile } = require("../services/parseService");
const fs = require("fs");

const handleUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const mimetype = req.file.mimetype;

    const resumeText = await extractTextFromFile(filePath, mimetype);

    fs.unlinkSync(filePath); // Delete uploaded file after processing

    res.status(200).json({ success: true, text: resumeText });
  } catch (error) {
    console.error("Upload error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { handleUpload };

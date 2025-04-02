const { generateDocument } = require("../services/openaiService");
const { fetchCompanyContent } = require("../utils/fetchCompanyUrl");

const generateCoverletter = async (req, res, next) => {
  try {
    const {
      resumeInput,
      jobDescription,
      companyUrl, // URL user provides
      tone = "Professional",
      style = "Modern",
      jobRole,
      industry = "Automotive",
    } = req.body;

    if (!resumeInput || !jobDescription || !tone || !style || !jobRole) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Fetch the actual company content if a URL is provided
    let companyContent = null;
    if (companyUrl) {
      companyContent = await fetchCompanyContent(companyUrl);
    }

    // Pass companyAboutContent into the prompt engine
    const content = await generateDocument("coverLetter", {
      resumeInput,
      jobDescription,
      companyContent, // ✅ replaces raw URL
      tone,
      style,
      jobRole,
      industry,
    });

    res.status(200).json({ success: true, content });
  } catch (error) {
    console.error("Cover letter generation failed:", error);
    next(error);
  }
};

module.exports = { generateCoverletter };
const { generateResumeWithPrompt } = require("../services/openaiService");

const generateResume = async (req, res, next) => {
  try {
    const {
      resumeInput,
      jobDescription,
      companyUrl,
      tone = "Professional",
      style = "Modern",
      jobRole, // NEW
    } = req.body;

    if (!resumeInput || !jobDescription || !tone || !style || !jobRole) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const resume = await generateResumeWithPrompt({
      resumeInput,
      jobDescription,
      companyUrl,
      tone,
      style,
      jobRole,
    });

    res.status(200).json({ success: true, resume });
  } catch (error) {
    next(error);
  }
};

module.exports = { generateResume };

const { generateDocument } = require("../services/openaiService");
const { fetchCompanyContent } = require("../utils/fetchCompanyUrl");

const generateJobDescription = async (req, res, next) => {
  try {
    const {
        jobTitle,
        department,
        location,
        employmentType,
        experienceLevel,
        platform,
        salary,
        tone,
        industry,
        idealCandidatePersona,
        keyResponsibilities,
        requirements,
        benefits,
        customInclusions,
        companyUrl,

    } = req.body;

    if (!jobTitle | !department | !location | !employmentType | !experienceLevel | !keyResponsibilities | !requirements | !benefits | !salary | !industry) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Fetch the actual company content if a URL is provided
    let companyContent = null;
    if (companyUrl) {
      companyContent = await fetchCompanyContent(companyUrl);
    }

    // Pass companyAboutContent into the prompt engine
    const content = await generateDocument("jobDescription", {
      companyContent,
      jobTitle,
      department,
      employmentType,
      location,
      experienceLevel,
      salary,
      platform,
      tone,
      industry,
      idealCandidatePersona,
      keyResponsibilities,
      requirements,
      benefits,
      customInclusions // ✅ replaces raw URL
    });

    res.status(200).json({ success: true, content });
  } catch (error) {
    console.error("Job description generation failed:", error);
    next(error);
  }
};

module.exports = { generateJobDescription };

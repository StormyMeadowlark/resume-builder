const { buildPromptContext } = require("../utils/buildPromptContext");

const buildResumePrompt = ({ resumeInput, jobDescription, companyContent, tone, style, jobRole, industry }) => {
  const context = buildPromptContext({ resumeInput, jobDescription, companyContent });

  return `
You're an expert resume writer for the ${industry} industry.

Create a **${style.toLowerCase()}** style resume with a **${tone.toLowerCase()}** tone for a **${jobRole}** role in **${industry}** industry.

${context}

✍️ Tailor the resume to highlight relevant skills, certifications, and experience that would make this applicant a top choice for the ${jobRole} role. Optimize it for both clarity and ${industry} industry impact. Make sure you use keywords from "${jobDescription}".
`;
};


module.exports = { buildResumePrompt };

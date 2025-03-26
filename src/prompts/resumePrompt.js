const { buildPromptContext } = require("../utils/buildPromptContext");

const buildResumePrompt = ({ resumeInput, jobDescription, companyUrl, tone, style, jobRole }) => {
  const context = buildPromptContext({ resumeInput, jobDescription, companyUrl });

  return `
You're an expert resume writer for the automotive industry.

Create a **${style.toLowerCase()}** style resume with a **${tone.toLowerCase()}** tone for a **${jobRole}** role.

${context}

✍️ Tailor the resume to highlight relevant skills, certifications, and experience that would make this applicant a top choice for the ${jobRole} role. Optimize it for both clarity and industry impact.
`;
};

module.exports = { buildResumePrompt };

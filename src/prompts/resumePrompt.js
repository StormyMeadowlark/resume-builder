const { buildPromptContext } = require("../utils/buildPromptContext");

const buildResumePrompt = ({ resumeInput, jobDescription, companyContent, tone, style, jobRole, industry }) => {
  const context = buildPromptContext({ resumeInput, jobDescription, companyContent });

  return `
You're an expert resume writer for the ${industry} industry.

Rewrite the candidates resume in a **${style.toLowerCase()}** style with a **${tone.toLowerCase()}** tone for a **${jobRole}** role in **${industry}** industry.
Do not make up any experience, skills, or credentials. Use only the information the candidate has provided. If something is missing, leave it out or generalize appropriately.

${context}

✍️ Tailor the resume without fabrication to highlight relevant skills, certifications, and experience that would make this applicant a top choice for the ${jobRole} role. Optimize it for both clarity and ${industry} industry impact. Make sure you use keywords from the provided context.
`;
};


module.exports = { buildResumePrompt };

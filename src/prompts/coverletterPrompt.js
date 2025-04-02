const { buildPromptContext } = require("../utils/buildPromptContext");

const buildCoverLetterPrompt = ({
  resumeInput,
  jobDescription,
  companyContent,
  tone,
  style,
  jobRole,
  industry,
}) => {
  const context = buildPromptContext({ resumeInput, jobDescription, companyContent });

  return `
You're an expert cover letter writer for the ${jobRole} role in the ${industry} industry.

Write a personalized cover letter using a ${tone.toLowerCase()} tone and a ${style.toLowerCase()} formatting style.

The cover letter should:
- Be no longer than one page
- Address the hiring manager directly (if no name, use "Hiring Manager")
- Highlight relevant experience, values alignment, and interest in the company
- Reference specific aspects of the job and company culture if available
- Use keywords found in the ${jobDescription}. 

${context}

Write the letter in a way that stands out, feels human, and ends with a clear, respectful call to action.`;
};

module.exports = { buildCoverLetterPrompt };

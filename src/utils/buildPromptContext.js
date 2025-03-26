const buildPromptContext = ({ resumeInput, jobDescription, companyUrl }) => {
    return `
  ---
  📋 Candidate Experience:
  ${resumeInput}
  
  ---
  📄 Job Description:
  ${jobDescription}
  
  ---
  🏢 Company Culture Page:
  ${companyUrl || "Not provided"}
  `;
  };
  
  module.exports = { buildPromptContext };
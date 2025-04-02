const buildPromptContext = ({ resumeInput, jobDescription, companyContent }) => {
  return `
📋 **Candidate Experience**
Use this as the applicant’s background and professional history:
"""
${resumeInput}
"""

📄 **Job Description**
Target the document to the following role:
"""
${jobDescription}
"""

🏢 **Company Content**
Use this to understand the company’s values, ethos, and voice:
${companyContent || "Not provided"}
`;
};
module.exports = { buildPromptContext };

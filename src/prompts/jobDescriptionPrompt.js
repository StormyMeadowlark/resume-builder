const buildJobDescriptionPrompt = ({
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
    companyContent,
  }) => {
    return `
  You are an expert HR recruiter and job strategist specializing in the ${platform} platform. You’re writing a job description for a **${jobTitle}** in the **${department}** department at a company in the **${industry || "Automotive"}** industry.
  
  The tone should be ${tone?.toLowerCase() || "friendly and professional"} and the formatting should follow best practices for job listings on **${platform}**.
  
  🧠 Candidate Profile:
  - Experience Level: **${experienceLevel}**
  - Employment Type: **${employmentType}**
  - Location: **${location}**
  - Ideal Persona: "${idealCandidatePersona}"
  - Salary: "${salary}"
  
  🏢 Company Context:
  Use the following company information to align with their values, culture, and tone:
  """
  ${companyContent || "Company overview not provided."}
  """
  
  ✍️ Your output must:
  - Use strong, engaging, and natural-sounding language (based on the tone)
  - Follow best practices for ${platform} job listings
  - Include the following, if provided:
    - Responsibilities: ${keyResponsibilities || "Use standard tasks for this role"}
    - Requirements: ${requirements || "Use typical qualifications for this level"}
    - Benefits: ${benefits || "Include common benefits if nothing is listed"}
    - Additional Info: ${customInclusions || "N/A"}
    - Do not add an extra "About Us" section. Use the provided company content for context.

  
  🚫 Do not fabricate responsibilities, benefits, or values not provided.
  
  🎯 Final Output:
  Write a compelling, skimmable job description that will appeal to the right candidates on ${platform}. Keep it organized using bullet points where appropriate, include clear sections, and write with intention to attract qualified applicants who fit the company’s tone and needs.
  `;
  };
  
  module.exports = { buildJobDescriptionPrompt };
  
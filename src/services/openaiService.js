const OpenAI = require("openai");
const config = require("../config");

const openai = new OpenAI({
  apiKey: config.OPENAI_API_KEY,
});

const generateResumeWithPrompt = async ({
  resumeInput,
  jobDescription,
  companyUrl,
  tone,
  style,
  jobRole,
}) => {
  const prompt = `
You're an expert resume writer for the automotive industry. Create a ${style.toLowerCase()} style resume with a ${tone.toLowerCase()} tone for a **${jobRole}** position.

Candidate Experience:
${resumeInput}

Job Description:
${jobDescription}

Company Culture Page (optional): ${companyUrl || "Not provided"}

Tailor the resume for a ${jobRole} role, using keywords, formatting, and tone appropriate to the role. Focus on achievements, clarity, and what shops or dealerships care about for this position.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert resume builder for the automotive industry.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};

module.exports = { generateResumeWithPrompt };

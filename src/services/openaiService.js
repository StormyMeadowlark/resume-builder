const OpenAI = require("openai");
const config = require("../config");

// Import prompt builders
const { buildResumePrompt } = require("../prompts/resumePrompt");
const { buildCoverLetterPrompt } = require("../prompts/coverletterPrompt");

const openai = new OpenAI({ apiKey: config.OPENAI_API_KEY });

const generateDocument = async (type, payload) => {
  let prompt;
  const { industry = "Automotive" } = payload;
  switch (type) {
    case "resume":
      prompt = buildResumePrompt(payload);
      break;
    case "coverLetter":
      prompt = buildCoverLetterPrompt(payload);
      break;
    default:
      throw new Error(`Unsupported document type: ${type}`);
  }

  const systemPrompt = `You are an expert ${type === "resume" ? "resume builder" : "cover letter writer"} for the ${industry} industry.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};

module.exports = { generateDocument };

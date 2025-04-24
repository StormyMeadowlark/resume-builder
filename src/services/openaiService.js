const OpenAI = require("openai");
const config = require("../config");

// Import prompt builders
const { buildResumePrompt } = require("../prompts/resumePrompt");
const { buildCoverLetterPrompt } = require("../prompts/coverletterPrompt");
const { buildJobDescriptionPrompt } = require("../prompts/jobDescriptionPrompt")

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
    case "jobDescription":
      prompt = buildJobDescriptionPrompt(payload);
      break;
    default:
      throw new Error(`Unsupported document type: ${type}`);
  }

  const systemPrompt = (() => {
    switch (type) {
      case "resume":
        return `You are an expert resume builder for the ${industry} industry.`;
      case "coverLetter":
        return `You are an expert cover letter writer for the ${industry} industry.`;
      case "jobDescription":
        return `You are a seasoned HR and recruiting professional with expertise in writing compelling, platform-optimized job descriptions tailored for the ${industry} industry.`;
      default:
        return `You are a helpful assistant with expertise in the ${industry} industry.`;
    }
  })();

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

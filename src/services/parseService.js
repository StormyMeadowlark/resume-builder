const fs = require("fs");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth")


const extractTextFromPDF = async (filePath) => {
  const fileBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(fileBuffer);
  return data.text;
};

const extractTextFromDocx = async (filePath) => {
    const { value } = await mammoth.extractRawText({ path: filePath });
    return value;
  };
  
  const extractTextFromFile = async (filePath, mimetype) => {
    if (mimetype === "application/pdf") {
      return await extractTextFromPDF(filePath);
    }
  
    if (
      mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      filePath.endsWith(".docx")
    ) {
      return await extractTextFromDocx(filePath);
    }
  
    throw new Error("Unsupported file type");
  };


module.exports = { extractTextFromFile };

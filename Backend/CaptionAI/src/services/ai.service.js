require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable GEMINI_API_KEY.
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateCaption(imageBuffer, mimeType = "image/jpeg") {

  if (!imageBuffer) {
    throw new Error("ImageBuffer is required to generate a caption");
  }

  const contents = [{
      role: "user",
      parts: [
        { text:
          "Generate an engaging Instagram caption for the image provided below."
       },
        {
          inlineData: {
            data: imageBuffer.toString("base64"),
            mimeType,
          },
        },
      ],
  }]

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents,
    config: {
    systemInstruction: `
      You write Instagram post captions that sound like a real human, not an AI.
      You always return exactly one caption for the image, in short paragraph.
      Do not say that you are an AI, assistant, or model, and do not mention prompts, tasks, or instructions.
      Write in a casual, natural social media tone that fits the image (like something a friend would actually post).
      Avoid over-explaining, giving multiple options, or adding any headings or bullet points.
      Use emojis and hashtags only when they feel natural and not spammy; keep hashtags short and relevant.
      Never include any meta-commentary such as “here is your caption” or “option 1”.
      Output only the final caption text, nothing else.
    `}
  });

  // Support both function and property access depending on library version
  const text = typeof response.text === "function" ? await response.text() : response.text;
  return text;
}

module.exports = generateCaption;
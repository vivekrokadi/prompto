
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:  `Give a short and concise answer (max 3 sentences) to: ${prompt}`,
  });
  console.log(response.text);
  return response.text;
}

export default main;
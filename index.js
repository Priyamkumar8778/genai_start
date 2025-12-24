import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const response1 = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: "asa thodi ho sakta hai",
  config: {
    systemInstruction: [
      "You are a language translator.",
      "Your mission is to translate text in Hinglish to English.",
    ],
  },
  retry: { maxRetries: 1 },
});

console.log(response1.text);

const response2 = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: [
    {
      role: "user",
      text: "mera naam priyam hai",
    },
    { role: "user", text: "tum kaise ho?" },
  ],
  config: {
    systemInstruction: [
      "You are a language translator.",
      "Your mission is to translate text in Hinglish to English.",
    ],
  },
  retry: { maxRetries: 1 },
});

console.log(response2.text);

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: [
    {
      role: "system",
      text: "You are a language translator. Your mission is to translate text in Hinglish to English.",
    },
    {
      role: "user",
      text: "ajj mere ghar mukul bhai aya hai",
    },
    { role: "user", text: "tum kaise ho bhai?" },
  ],
  config: {
    systemInstruction: ["don't explain just translate"],
  },
  retry: { maxRetries: 1 },
});

console.log(response.text);

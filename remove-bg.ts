import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  const base64ImageData = fs.readFileSync("public/logo.png").toString("base64");
  
  const response = await ai.models.generateContent({
    model: 'gemini-3.1-flash-image-preview',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64ImageData,
            mimeType: "image/png",
          },
        },
        {
          text: 'remove the background from this logo, making the background completely transparent, keep the logo intact',
        },
      ],
    },
  });
  
  const parts = response.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData && part.inlineData.data) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync("public/logo-transparent.png", Buffer.from(base64EncodeString, 'base64'));
      console.log("Saved transparent logo");
    }
  }
}

run().catch(console.error);

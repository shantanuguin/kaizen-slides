import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const logoPath = path.join(process.cwd(), "public", "logo.png");
    const base64ImageData = fs.readFileSync(logoPath).toString("base64");
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
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
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData && typeof part.inlineData.data === 'string') {
        const base64EncodeString = part.inlineData.data;
        const outPath = path.join(process.cwd(), "public", "logo-transparent.png");
        fs.writeFileSync(outPath, Buffer.from(base64EncodeString, 'base64'));
        return NextResponse.json({ success: true, message: "Saved transparent logo" });
      }
    }
    return NextResponse.json({ success: false, message: "No image returned" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message });
  }
}

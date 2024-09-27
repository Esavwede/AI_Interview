

import { GoogleGenerativeAI } from "@google/generative-ai";
import { initiliazeGeminiAI } from "./geminiInitializer";

// GEMINI MODEL 
const genAI: GoogleGenerativeAI = initiliazeGeminiAI() 

export async function runPrompt( prompt: string ): Promise<string> 
  {
        const result: string = await runPromptWithGemini( prompt )
        return result 
  }


  export async function runPromptWithGemini( prompt: string ): Promise<string> 
  {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const result = await model.generateContent([prompt]);
        const textResult: string =  result.response.text()
        return textResult
  }

  
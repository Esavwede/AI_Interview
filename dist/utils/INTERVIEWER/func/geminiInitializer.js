"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiliazeGeminiAI = initiliazeGeminiAI;
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
function initiliazeGeminiAI() {
    if (!GEMINI_API_KEY) {
        console.log("GEMINI API KEY NOT PROVIDED");
        process.exit(1);
    }
    return new generative_ai_1.GoogleGenerativeAI(GEMINI_API_KEY);
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runPrompt = runPrompt;
exports.runPromptWithGemini = runPromptWithGemini;
const geminiInitializer_1 = require("./geminiInitializer");
// GEMINI MODEL 
const genAI = (0, geminiInitializer_1.initiliazeGeminiAI)();
function runPrompt(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield runPromptWithGemini(prompt);
        console.log(result);
        return result;
    });
}
function runPromptWithGemini(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = yield model.generateContent([prompt]);
        const textResult = result.response.text();
        return textResult;
    });
}

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
exports.generateNextResponseFromInterviewer = generateNextResponseFromInterviewer;
const promptRunner_1 = require("./promptRunner");
function generateNextResponseFromInterviewer(interviewData, interviewTranscript) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { candidateFirstname, candidateResume, companyName, jobDescription, experienceLevel, roleName } = interviewData;
            const prompt = `
       
       Your_Role: You are an intelligent AI that reads the transcript and context of an incomplete interview and determines the next response from
                  the interviewer, strictly and I repeat, strictly based on the standard structure of a real world interview. 

       Your_Rules: 
            
       - Your response should be in the format:  Interviewer: {interviewer_generated_response_here}. 

       - You must only return a response in the response format specified above. 
       

        Now Perform Your Role on the given Interview transcript and Interview Context below: 

        Interview_Context:  The Interviewer is interviewing the candidate, ${candidateFirstname}, for a comapany called, company ${companyName}, 
                            for the role ${roleName} of which the experience level needed is ${experienceLevel}, 
                            where by the job description is ${jobDescription} and the candidate's resume ${candidateResume}. 

        Interview_Transcript: 
                             ${interviewTranscript} 
       `;
            const interviewerResponse = yield (0, promptRunner_1.runPrompt)(prompt);
            return interviewerResponse;
        }
        catch (e) {
            console.log(`GENERATE_NEXT_AI_RESPONSE_ERROR: ${e}`);
            process.exit(1);
        }
    });
}

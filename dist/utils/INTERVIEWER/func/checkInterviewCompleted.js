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
exports.checkInterviewCompleted = checkInterviewCompleted;
const interviewer_1 = require("../../../INTERVIEWER/roles/interviewer");
const promptRunner_1 = require("./promptRunner");
function checkInterviewCompleted(interviewTranscript) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Prepend Interview Transcript To Interview Checker Role 
            var prompt = interviewer_1.INTERVIEW_COMPLETE_CHECKER + '\n' + interviewTranscript;
            var interviewCompleted = yield (0, promptRunner_1.runPrompt)(prompt); /** INFO: returns a string: "true" or "false" */
            // Convert "true" or "false" String To Boolean
            const interviewCompletedBoolean = Boolean(interviewCompleted);
            if (typeof interviewCompletedBoolean !== 'boolean') {
                console.log("CHECK_INTERVIEW_COMPLETE_ERROR: MODEL did not return a boolean ");
                process.exit(1); // EXIT PROGRAM 
            }
            console.log("This is the AI's value of Interview Completed:" + interviewCompleted);
            var finalResult = undefined;
            if (interviewCompleted === 'true') {
                finalResult = true;
            }
            if (interviewCompleted === 'false') {
                finalResult = false;
            }
            return finalResult;
        }
        catch (e) {
            console.log(`CHECK_INTERVIEW_COMPLETE: ${e} `);
            process.exit(1);
        }
    });
}

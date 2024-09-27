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
exports.startInterview = startInterview;
const checkInterviewCompleted_1 = require("./checkInterviewCompleted");
const appendMessageToInterviewTranscript_1 = require("./appendMessageToInterviewTranscript");
const getUserInputFromTerminal_1 = require("./getUserInputFromTerminal");
const prependToCandidateResponse_1 = require("./prependToCandidateResponse");
const generateNextResponseFromInterviewContext_1 = require("./generateNextResponseFromInterviewContext");
const firstSystemMessage = 'INTERVIEW: You are welcomed to the interview';
function startInterview(interviewData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Current Interview Completion Status 
            let interiewIsComplete = false;
            // Initialized Transcript For Interview
            let interviewTranscript = '';
            // Append First From Interviewer to Transcript 
            interviewTranscript = (0, appendMessageToInterviewTranscript_1.appendMessageToInterviewTranscript)(interviewTranscript, firstSystemMessage);
            // Log First Message To User Terminal || Send First Message to User 
            console.log(`${firstSystemMessage}`);
            // Get Candidate Response from Terminal || Other Medium 
            var candidateResponse = yield (0, getUserInputFromTerminal_1.getUserInput)();
            // Prepend "candidate:" to candidate response 
            candidateResponse = (0, prependToCandidateResponse_1.prependStringToCandidateResponse)('Candidate:', candidateResponse);
            // Append candidate response to Transcript 
            interviewTranscript = (0, appendMessageToInterviewTranscript_1.appendMessageToInterviewTranscript)(interviewTranscript, candidateResponse);
            /** Main Loop */
            while (interiewIsComplete === false) {
                // Determine if context is complete 
                const interviewCompleted = yield (0, checkInterviewCompleted_1.checkInterviewCompleted)(interviewTranscript);
                console.log("Here : %b ", interviewCompleted);
                if (!interviewCompleted) {
                    console.log("Interview Not Completed");
                    // Generate Next Response From Interviewer 
                    const interviewerResponse = yield (0, generateNextResponseFromInterviewContext_1.generateNextResponseFromInterviewer)(interviewData, interviewTranscript);
                    console.log(interviewerResponse);
                    // Append Generated Interviewer Message To Current Interview Transcript 
                    interviewTranscript = (0, appendMessageToInterviewTranscript_1.appendMessageToInterviewTranscript)(interviewTranscript, interviewerResponse);
                    // Get Candidate Response 
                    var candidateResponse = yield (0, getUserInputFromTerminal_1.getUserInput)();
                    // Prepend "candidate:" to candidate response 
                    candidateResponse = (0, prependToCandidateResponse_1.prependStringToCandidateResponse)('candidate:', candidateResponse);
                    // Append Candidate Response To Interview Transcript 
                    interviewTranscript = (0, appendMessageToInterviewTranscript_1.appendMessageToInterviewTranscript)(interviewTranscript, candidateResponse);
                }
                else {
                    // Interview Completed 
                    console.log("Interview Completed");
                    // Save Entire Interview Context 
                    console.log(interviewTranscript);
                    // End Program 
                    interiewIsComplete = true;
                    break;
                }
                // Execution Flow Here ? Interview Not Complete. 
                // Return to While Loop Top ^       
            }
            // Execution Flow Here ? Interview Complete 
            console.log("INTERVIEW COMPLETED SUCCESSFULLY !");
            process.exit(0);
        }
        catch (e) {
            console.log("Error Occured While Starting Interview");
            console.log(e);
        }
    });
}

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const takeInterview_1 = require("./utils/INTERVIEWER/func/takeInterview");
const readFileToVariable_1 = require("./utils/system/readFileToVariable");
const path_1 = __importDefault(require("path"));
console.log("WELCOME TO INTERVIEW AI. THE INTERVIEW WILL START SHORTLY ");
console.log("LETS GET YOUR INTERVIEW STARTED");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const candidateResume = yield (0, readFileToVariable_1.readFileContentToVariable)(path_1.default.join(__dirname, './resume.txt'));
            const jobDescription = yield (0, readFileToVariable_1.readFileContentToVariable)(path_1.default.join(__dirname, './jobDescription.txt'));
            // Your Interview Details 
            const myInterviewData = {
                candidateFirstname: "ogagaoghene",
                roleName: "backend developer",
                experienceLevel: "junior",
                companyName: "Jobrail",
                jobDescription,
                candidateResume
            };
            (0, takeInterview_1.startInterview)(myInterviewData);
        }
        catch (e) {
            console.error("PROGRAM_ERROR: ", e);
            process.exit(1);
        }
    });
}
main();

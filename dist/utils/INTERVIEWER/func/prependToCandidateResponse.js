"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prependStringToCandidateResponse = prependStringToCandidateResponse;
function prependStringToCandidateResponse(stringToPrepend, candidateResponse) {
    return stringToPrepend + ' ' + candidateResponse;
}

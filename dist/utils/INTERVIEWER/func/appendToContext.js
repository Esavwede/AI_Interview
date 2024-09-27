"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendMessageToInterviewContext = appendMessageToInterviewContext;
function appendMessageToInterviewContext(context, message) {
    try {
        return context + '\n' + message;
    }
    catch (e) {
        console.log(`Error Occured while appending to context`);
        console.log(e);
    }
}

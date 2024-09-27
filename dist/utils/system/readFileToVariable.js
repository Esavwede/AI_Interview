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
exports.readFileContentToVariable = readFileContentToVariable;
const promises_1 = __importDefault(require("fs/promises"));
function readFileContentToVariable(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Read the content of the file asynchronously using promises
            return yield promises_1.default.readFile(filePath, 'utf8');
        }
        catch (err) {
            console.error('Error reading the file:', err);
            process.exit(1);
        }
    });
}

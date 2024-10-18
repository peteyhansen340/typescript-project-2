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
// src/index.ts
const auth_1 = require("./auth");
const user_1 = require("./user");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Registering users...');
            yield (0, auth_1.registerUser)(new user_1.User('john_doe', 'password123', 'john@example.com', 25));
            yield (0, auth_1.registerUser)(new user_1.User('jane_doe', 'pass456', 'jane@example.com', 22));
            console.log('Users registered successfully!');
            console.log('Attempting to login...');
            const loginMessage = yield (0, auth_1.loginUser)('john_doe', 'password123');
            console.log(loginMessage);
            console.log('All registered users:', (0, auth_1.getUsers)());
        }
        catch (error) {
            // Ensure proper error handling
            if (error instanceof Error) {
                console.error(`Error: ${error.message}`);
            }
            else {
                console.error('An unexpected error occurred:', error);
            }
        }
    });
}
main();

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
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
// In-memory list to store registered users
const users = [];
// Register a new user
function registerUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = users.find((u) => u.username === user.username);
        if (existingUser) {
            throw new Error('Username already exists!');
        }
        users.push(user);
        return `User ${user.username} registered successfully.`;
    });
}
// Login an existing user
function loginUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) {
            throw new Error('Invalid username or password.');
        }
        return `Welcome, ${user.username}!`;
    });
}
// Get all registered users (for testing purposes)
function getUsers() {
    return users;
}

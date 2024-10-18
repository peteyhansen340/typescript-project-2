"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/user.ts
class User {
    constructor(username, password, email, age) {
        this.isActive = true;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
    }
}
exports.User = User;

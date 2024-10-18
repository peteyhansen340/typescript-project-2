// src/user.ts
export class User {
    public username: string;
    public password: string;
    public email: string;
    public age: number;
    public isActive: boolean = true;
  
    constructor(username: string, password: string, email: string, age: number) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.age = age;
    }
  }
  
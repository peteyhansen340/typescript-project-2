// src/auth.ts
import { User } from './user';

// In-memory list to store registered users
const users: User[] = [];

// Register a new user
export async function registerUser(user: User): Promise<string> {
  const existingUser = users.find((u) => u.username === user.username);
  if (existingUser) {
    throw new Error('Username already exists!');
  }
  users.push(user);
  return `User ${user.username} registered successfully.`;
}

// Login an existing user
export async function loginUser(username: string, password: string): Promise<string> {
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    throw new Error('Invalid username or password.');
  }
  return `Welcome, ${user.username}!`;
}

// Get all registered users (for testing purposes)
export function getUsers(): User[] {
  return users;
}

// src/index.ts
import { registerUser, loginUser, getUsers } from './auth';
import { User } from './user';

async function main() {
  try {
    console.log('Registering users...');
    await registerUser(new User('john_doe', 'password123', 'john@example.com', 25));
    await registerUser(new User('jane_doe', 'pass456', 'jane@example.com', 22));

    console.log('Users registered successfully!');
    console.log('Attempting to login...');

    const loginMessage = await loginUser('john_doe', 'password123');
    console.log(loginMessage);

    console.log('All registered users:', getUsers());
  } catch (error) {
    // Ensure proper error handling
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}

main();

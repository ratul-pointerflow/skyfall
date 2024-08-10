// generate unique id
let counter = 0;

export function generateUniqueNumber() {
  const timestamp = Date.now(); // Get the current timestamp
  const randomNum = Math.floor(Math.random() * 1e6); // Generate a random number between 0 and 999999
  counter += 1; // Increment the counter to ensure uniqueness
  return Number(`${timestamp}${randomNum}${counter}`);
}

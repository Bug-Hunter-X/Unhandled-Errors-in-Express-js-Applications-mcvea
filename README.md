# Unhandled Errors in Express.js Applications

This repository demonstrates a common error in Express.js applications: inadequate error handling.  Improperly handled errors can lead to unexpected application behavior, crashes, and security vulnerabilities. 

The `bug.js` file shows an example of insufficient error handling. The `bugSolution.js` file provides a corrected version with robust error handling mechanisms.

## How to Reproduce the Bug
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `node bug.js`.
4. Try to access a non-existent user ID. Note the lack of a descriptive error message.
5. Simulate an error by uncommenting the line that throws an exception.

## Solution
The `bugSolution.js` file shows improved error handling using dedicated middleware. This improves user experience, security, and application stability.

## Lessons Learned
- Always handle potential errors using try...catch blocks or middleware. 
- Provide informative error messages to users without revealing sensitive information. 
- Use appropriate HTTP status codes to communicate the nature of errors (e.g., 404 Not Found, 500 Internal Server Error).
- Centralized error handling through middleware helps maintain consistency. 
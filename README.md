# Express TypeScript Login Register API

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg) ![Releases](https://img.shields.io/badge/releases-latest-orange.svg)

Welcome to the **Express TypeScript Login Register API**. This project offers a secure and robust authentication API built with Express.js, TypeScript, Prisma, and MongoDB Atlas. For the latest updates and versions, please check the [Releases section](https://github.com/RomeoHPT/express-ts-login-register/releases).

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- 🔐 **Authentication System**: Users can register and log in using JWT tokens.
- 🛡️ **Security First**: The API implements Helmet for security headers and CORS protection.
- 📝 **TypeScript**: Full type safety enhances the development experience.
- 🗄️ **Prisma ORM**: Type-safe database operations with MongoDB Atlas ensure reliable data management.
- 🔑 **JWT Authentication**: Secure token-based authentication protects user data.
- 📊 **Request Logging**: Morgan middleware logs HTTP requests for better monitoring.
- ✅ **Health Check**: Easily monitor API status with built-in health checks.
- 🚀 **Production Ready**: The API follows error handling and security best practices.

## Tech Stack

This project utilizes the following technologies:

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB Atlas
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Security**: Helmet, CORS
- **Logging**: Morgan

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher
- **MongoDB Atlas**: Create an account and set up a cluster

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RomeoHPT/express-ts-login-register.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd express-ts-login-register
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**: Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret. Example:
   ```
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application**:
   ```bash
   npm run start
   ```

## Usage

Once the application is running, you can interact with the API using tools like Postman or cURL. The API provides endpoints for user registration and login.

### Example Requests

- **User Registration**:
  ```http
  POST /api/register
  Content-Type: application/json

  {
      "username": "exampleUser",
      "password": "examplePassword"
  }
  ```

- **User Login**:
  ```http
  POST /api/login
  Content-Type: application/json

  {
      "username": "exampleUser",
      "password": "examplePassword"
  }
  ```

## API Endpoints

Here’s a summary of the available API endpoints:

| Method | Endpoint         | Description                     |
|--------|------------------|---------------------------------|
| POST   | /api/register     | Register a new user            |
| POST   | /api/login        | Log in an existing user        |
| GET    | /api/health       | Check API health status        |

## Testing

To run tests, use the following command:

```bash
npm run test
```

Ensure that you have a testing database set up in your environment variables.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma**: An open-source database toolkit that makes working with databases easy.
- **MongoDB Atlas**: A cloud database service for modern applications.
- **JWT**: JSON Web Tokens for secure authentication.

For more details and the latest updates, please visit the [Releases section](https://github.com/RomeoHPT/express-ts-login-register/releases).
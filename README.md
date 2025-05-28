# Express TypeScript Login Register API

A secure and robust authentication API built with Express.js, TypeScript, Prisma, and MongoDB Atlas.

## Features

- 🔐 **Authentication System** - User registration and login with JWT tokens
- 🛡️ **Security First** - Helmet for security headers, CORS protection
- 📝 **TypeScript** - Full type safety and better development experience
- 🗄️ **Prisma ORM** - Type-safe database operations with MongoDB Atlas
- 🔑 **JWT Authentication** - Secure token-based authentication
- 📊 **Request Logging** - Morgan middleware for HTTP request logging
- ✅ **Health Check** - Monitor API status
- 🚀 **Production Ready** - Error handling and security best practices

## Tech Stack

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

- Node.js (v18 or higher)
- MongoDB Atlas account
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/express-ts-login-register.git
   cd express-ts-login-register
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=
   
   # JWT
   JWT_SECRET=
   JWT_EXPIRES_IN=
   
   # Server
   PORT=
   
   # CORS
   FRONTEND_URL=
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Database Management
```bash
# Open Prisma Studio
npm run db:studio
```

## API Endpoints

### Health Check
- **GET** `/health`
  - Check if the server is running
  - **Response**: 
    ```json
    {
      "success": true,
      "message": "Server is running",
      "timestamp": "2024-01-01T00:00:00.000Z"
    }
    ```

### Authentication Routes

Base URL: `/api/auth`

#### Register User
- **POST** `/api/auth/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123",
    "name": "John Doe"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "user": {
        "id": "user_id",
        "email": "user@example.com",
        "name": "John Doe"
      },
      "token": "jwt_token_here"
    }
  }
  ```

#### Login User
- **POST** `/api/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "user": {
        "id": "user_id",
        "email": "user@example.com",
        "name": "John Doe"
      },
      "token": "jwt_token_here"
    }
  }
  ```

#### Get User Profile
- **GET** `/api/auth/profile`
- **Headers**: 
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "user": {
        "id": "user_id",
        "email": "user@example.com",
        "name": "John Doe",
        "createdAt": "2024-01-01T00:00:00.000Z"
      }
    }
  }
  ```

## Error Responses

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information (development only)"
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Security Features

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configurable cross-origin resource sharing
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Request Size Limiting**: JSON payload limited to 10MB
- **Error Handling**: Global error handler prevents information leakage

## Project Structure

```
express-ts-login-register/
│── controllers/
│   └── authController.ts
│── lib/
│   └── prisma.ts
│── middleware/
│   └── auth.ts
│── routes/
│   └── authRoutes.ts
│── types/
│   └── auth.ts
│── utils/
│   └── auth.ts
│   └── validation.ts
│── app.ts
│── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```


## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `JWT_EXPIRES_IN` | JWT token expiration |
| `PORT` | Server port |
| `FRONTEND_URL` | Frontend URL for CORS |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Happy Coding! 🚀**

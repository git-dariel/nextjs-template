# Next.js Backend API

A TypeScript Express.js API with MongoDB and Prisma for the Next.js frontend.

## Features

- **Express.js** with TypeScript
- **MongoDB** database with Prisma ORM
- **Authentication** with JWT
- **Input validation** with Joi
- **Security** with Helmet and CORS
- **Rate limiting**
- **Error handling**

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your MongoDB connection string and JWT secret.

4. Generate Prisma client:
   ```bash
   npm run db:generate
   ```

5. Push the schema to your database:
   ```bash
   npm run db:push
   ```

### Development

Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Run database migrations

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user (authenticated)
- `DELETE /api/users/:id` - Delete user (authenticated)

### Posts
- `GET /api/posts` - Get all posts (with pagination)
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create post (authenticated)
- `PUT /api/posts/:id` - Update post (authenticated, owner only)
- `DELETE /api/posts/:id` - Delete post (authenticated, owner only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create category (authenticated)
- `PUT /api/categories/:id` - Update category (authenticated)
- `DELETE /api/categories/:id` - Delete category (authenticated)

## Database Schema

The database includes three main models:
- **User** - User accounts with authentication
- **Post** - Blog posts or content
- **Category** - Content categorization

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet security headers
- Input validation

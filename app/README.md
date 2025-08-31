# Next.js Template with TypeScript API

This is a [Next.js](https://nextjs.org) project with a TypeScript Express.js API backend, MongoDB database, and Prisma ORM.

## 🏗️ Project Structure

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT-based authentication

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or cloud instance like MongoDB Atlas)

### Setup

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Configure environment variables:**
   - Copy `backend/.env.example` to `backend/.env`
   - Update the MongoDB connection string and JWT secret
   ```bash
   cd backend
   cp .env.example .env
   ```

3. **Set up the database:**
   ```bash
   npm run backend:db:generate
   npm run backend:db:push
   ```

4. **Start both frontend and backend:**
   ```bash
   npm run dev:full
   ```

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health
- **Prisma Studio**: `npm run backend:db:studio`

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user (auth required)
- `DELETE /api/users/:id` - Delete user (auth required)

### Posts
- `GET /api/posts` - Get posts (with pagination)
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create post (auth required)
- `PUT /api/posts/:id` - Update post (auth required, owner only)
- `DELETE /api/posts/:id` - Delete post (auth required, owner only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create category (auth required)
- `PUT /api/categories/:id` - Update category (auth required)
- `DELETE /api/categories/:id` - Delete category (auth required)

## 🛠️ Development Scripts

### Frontend + Backend
- `npm run dev:full` - Run both frontend and backend
- `npm run install:all` - Install dependencies for both

### Frontend Only
- `npm run dev` - Start Next.js development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Backend Only
- `npm run backend:dev` - Start backend development server
- `npm run backend:build` - Build backend for production
- `npm run backend:start` - Start backend production server

### Database
- `npm run backend:db:generate` - Generate Prisma client
- `npm run backend:db:push` - Push schema to database
- `npm run backend:db:studio` - Open Prisma Studio

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

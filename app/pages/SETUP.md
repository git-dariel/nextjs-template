# 🚀 Setup Instructions

## Overview
You now have a complete full-stack application with:
- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Prisma ORM
- **Authentication**: JWT-based auth system

## 🔧 Setup Steps

### 1. Install Dependencies
```bash
# Install all dependencies (frontend + backend)
npm run install:all
```

### 2. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Update `backend/.env` with local connection:
   ```
   DATABASE_URL="mongodb://localhost:27017/next-template"
   ```

#### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/atlas
2. Create a new cluster
3. Get connection string and update `backend/.env`:
   ```
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/next-template"
   ```

### 3. Environment Configuration
```bash
cd backend
cp .env.example .env
# Edit .env file with your MongoDB URL and JWT secret
```

### 4. Database Schema
```bash
# Generate Prisma client
npm run backend:db:generate

# Push schema to database
npm run backend:db:push
```

### 5. Start Development
```bash
# Start both frontend and backend
npm run dev:full
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health
- **Prisma Studio**: `npm run backend:db:studio`

## 🧪 Testing the API

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Create a Post (requires authentication)
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"My First Post","content":"This is my first post!","published":true}'
```

### Get All Posts
```bash
curl http://localhost:5000/api/posts
```

## 📁 Project Structure

```
├── app/                    # Next.js frontend
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # API client and utilities
│   └── ...
├── backend/               # Express.js API
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── lib/          # Database connection
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utility functions
│   ├── prisma/           # Database schema
│   └── ...
└── ...
```

## 🔐 API Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## 📊 Database Models

- **User**: User accounts with email/password authentication
- **Post**: Blog posts with title, content, and publish status
- **Category**: Content categorization (extensible)

## 🛠️ Development Commands

### Frontend Only
- `npm run dev` - Start Next.js dev server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Backend Only
- `npm run backend:dev` - Start API dev server
- `npm run backend:build` - Build API for production
- `npm run backend:start` - Start API production server

### Database
- `npm run backend:db:generate` - Generate Prisma client
- `npm run backend:db:push` - Sync schema to database
- `npm run backend:db:studio` - Open Prisma Studio GUI

### Full Stack
- `npm run dev:full` - Start both frontend and backend
- `npm run install:all` - Install all dependencies

## 🔧 Troubleshooting

### Database Connection Issues
1. Check MongoDB is running
2. Verify connection string in `backend/.env`
3. Check network connectivity (for Atlas)

### CORS Issues
- Update `FRONTEND_URL` in `backend/.env`
- Check API client URL in `.env.local`

### TypeScript Errors
- Run `npm run backend:db:generate` to update types
- Restart TypeScript language server in VS Code

## 🚀 Deployment

### Backend
- Build: `npm run backend:build`
- Deploy `dist/` folder to your hosting service
- Set environment variables in production

### Frontend  
- Build: `npm run build`
- Deploy with Vercel, Netlify, or your preferred host
- Set `NEXT_PUBLIC_API_URL` to your production API URL

#!/bin/bash

echo "🚀 Setting up Next.js + TypeScript API with MongoDB and Prisma"
echo "============================================================"

# Check if MongoDB is running (optional - user might be using cloud MongoDB)
echo "📋 Prerequisites:"
echo "  - Node.js (v18 or higher)"
echo "  - MongoDB (local or cloud instance)"
echo ""

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating environment file..."
    cp .env.example .env
    echo "⚠️  Please update the .env file with your MongoDB connection string and JWT secret"
fi

# Generate Prisma client
echo "🔄 Generating Prisma client..."
npx prisma generate

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update backend/.env with your MongoDB connection string"
echo "2. Start your MongoDB server (if using local)"
echo "3. Run 'npm run db:push' in the backend directory to sync the database schema"
echo "4. Run 'npm run dev:full' from the root directory to start both frontend and backend"
echo ""
echo "🌐 URLs:"
echo "  - Frontend: http://localhost:3000"
echo "  - Backend API: http://localhost:5000"
echo "  - API Health Check: http://localhost:5000/health"

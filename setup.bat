@echo off
echo 🚀 Setting up Next.js + TypeScript API with MongoDB and Prisma
echo ============================================================
echo.

echo 📋 Prerequisites:
echo   - Node.js (v18 or higher)
echo   - MongoDB (local or cloud instance)
echo.

echo 📦 Installing frontend dependencies...
call npm install

echo 📦 Installing backend dependencies...
cd backend
call npm install

if not exist .env (
    echo 📝 Creating environment file...
    copy .env.example .env
    echo ⚠️  Please update the .env file with your MongoDB connection string and JWT secret
)

echo 🔄 Generating Prisma client...
call npx prisma generate

cd ..

echo.
echo ✅ Setup complete!
echo.
echo 📋 Next steps:
echo 1. Update backend/.env with your MongoDB connection string
echo 2. Start your MongoDB server (if using local)
echo 3. Run 'npm run backend:db:push' to sync the database schema
echo 4. Run 'npm run dev:full' to start both frontend and backend
echo.
echo 🌐 URLs:
echo   - Frontend: http://localhost:3000
echo   - Backend API: http://localhost:5000
echo   - API Health Check: http://localhost:5000/health

pause

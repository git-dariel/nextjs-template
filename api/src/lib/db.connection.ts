// Import database connection
import { prisma } from "./prisma";

// Function to check database connection
export async function connectDatabase() {
  try {
    // Test the database connection
    await prisma.$connect();

    console.log("✅ Database connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    console.error("Please check your DATABASE_URL in the .env file");
    return false;
  }
}

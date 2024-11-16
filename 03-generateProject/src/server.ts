import prisma from "./config/prisma";
import path from "path";
import dotenv from "dotenv";

/* -----> Express Instance <----- */
import app from "./app";

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Server Port
const port = process.env.PORT ?? 5000;

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Test Database Connection
async function testDbConnection() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}
testDbConnection();

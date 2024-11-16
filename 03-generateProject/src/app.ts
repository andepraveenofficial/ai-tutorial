import express, { Request, Response } from "express";
import apiRoutes from "./api";

const app = express();

/* -----> Express Built-in Middlewares <----- */
app.use(express.json());

/* -----> Routes <----- */

// Home route
app.get("/", (req: Request, res: Response) => {
  console.log("I am Home Route");
  res.send("I am Home route");
});

/* -----> API Routes <----- */
app.use("/api", apiRoutes);

/* -----> Error Handling for Non-existent Routes <----- */
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;

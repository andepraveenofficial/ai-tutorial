import express from "express";
import productRoutes from "./product.route";

const router = express.Router();

// API routes
router.use("/products", productRoutes);

export default router;

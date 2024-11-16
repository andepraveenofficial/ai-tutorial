import { Router } from "express";
import { productController } from "../controllers";

const router = Router();

// Product routes
router
  .route("/")
  .get(productController.getAllProducts)  // GET /products - Fetch all products
  .post(productController.createProduct); // POST /products - Create a new product

router
  .route(":id")
  .put(productController.updateProduct)  // PUT /products/:id - Update product (full replacement)
  .patch(productController.updateProductPart)  // PATCH /products/:id - Partially update product
  .delete(productController.deleteProduct);  // DELETE /products/:id - Soft delete a product

export default router;

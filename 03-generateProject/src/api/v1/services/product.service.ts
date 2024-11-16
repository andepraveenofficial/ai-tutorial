import { ProductModel } from "../models";
import { CreateProductDto, UpdateProductDto } from "../dtos";
import { productRepository } from "../repositories";

// Get all products
export const getAllProducts = async (): Promise<ProductModel[]> => {
  return await productRepository.findAll();
};

// Create a product
export const createProduct = async (productData: CreateProductDto): Promise<ProductModel> => {
  return await productRepository.create(productData);
};

// Update a product
export const updateProduct = async (id: string, updateData: UpdateProductDto): Promise<ProductModel> => {
  return await productRepository.update(id, updateData);
};

// Partially update a product
export const updateProductPart = async (id: string, updates: UpdateProductDto): Promise<ProductModel> => {
  return await productRepository.update(id, updates);
};

// Delete a product
export const deleteProduct = async (id: string): Promise<ProductModel> => {
  return await productRepository.softDelete(id);
};

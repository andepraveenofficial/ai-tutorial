import { ProductModel } from "../models";
import { CreateProductDto, UpdateProductDto } from "../dtos";
import prisma from "../../../config/prisma";

// Get all products
export const findAll = async (): Promise<ProductModel[]> => {
  return await prisma.product.findMany();
};

// Create a product
export const create = async (productData: CreateProductDto): Promise<ProductModel> => {
  return await prisma.product.create({
    data: productData,
  });
};

// Update a product
export const update = async (id: string, updateData: UpdateProductDto): Promise<ProductModel> => {
  return await prisma.product.update({
    where: { id },
    data: updateData,
  });
};

// Soft delete a product
export const softDelete = async (id: string): Promise<ProductModel> => {
  return await prisma.product.update({
    where: { id },
    data: { deletedAt: new Date() },
  });
};

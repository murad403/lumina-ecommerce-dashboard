import z from "zod";

export const addProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    category: z.string().min(1, "Category is required"),
    sku: z.string().min(1, "SKU is required"),
    price: z.string().min(1, "Price is required"),
    stock: z.string().min(1, "Stock is required"),
    description: z.string().min(1, "Description is required"),
})


export const addCategorySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    slug: z.string().min(1, "Slug is required"),
    description: z.string().min(1, "Description is required"),
})


export const editCategorySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    slug: z.string().min(1, "Slug is required"),
    description: z.string().min(1, "Description is required"),
})
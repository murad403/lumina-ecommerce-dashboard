import z from "zod";

export const addProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    category: z.string().min(1, "Category is required"),
    sku: z.string().min(1, "SKU is required"),
    price: z.number().min(0.01, "Price must be greater than 0"),
    stock: z.number().int().min(0, "Stock must be 0 or greater"),
    images: z.any().optional(),
    description: z.string().min(1, "Description is required"),
})

export const editProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    category: z.string().min(1, "Category is required"),
    sku: z.string().min(1, "SKU is required"),
    price: z.number().min(0.01, "Price must be greater than 0"),
    stock: z.number().int().min(0, "Stock must be 0 or greater"),
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


export const storeInformationSchema = z.object({
    storeName: z.string().min(1, "Store name is required"),
    contactEmail: z.string().min(1, "Contact email is required").email("Invalid email address"),
    storeDescription: z.string().min(1, "Store description is required"),
});


export const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
})

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})
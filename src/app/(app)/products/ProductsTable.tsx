/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { mockInventory } from '@/lib/admin-data'
import { products } from '@/lib/data'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { AlertTriangle, Edit, Eye, MoreVertical, Plus, Trash, Upload, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

type TProps = {
    searchQuery: string;
}

const editProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    category: z.string().min(1, "Category is required"),
    sku: z.string().min(1, "SKU is required"),
    price: z.string().min(1, "Price is required"),
    stock: z.string().min(1, "Stock is required"),
    description: z.string().min(1, "Description is required"),
})

type EditProductFormData = z.infer<typeof editProductSchema>

const ProductsTable = ({ searchQuery }: TProps) => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [variants, setVariants] = useState<Array<{ color: string; size: string; sku: string; stock: number; price?: number }>>([])
    const [productImages, setProductImages] = useState<string[]>([])

    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<EditProductFormData>({
        resolver: zodResolver(editProductSchema),
        defaultValues: {
            name: "",
            category: "",
            price: "",
            stock: "",
            description: "",
            sku: "",
        },
    })

    const resetForm = () => {
        reset()
        setProductImages([])
        setVariants([])
        setSelectedProduct(null)
    }

    const addVariant = () => {
        setVariants([...variants, { color: "", size: "", sku: "", stock: 0 }])
    }

    const removeVariant = (index: number) => {
        setVariants(variants.filter((_, i) => i !== index))
    }

    const updateVariant = (index: number, field: string, value: string | number) => {
        const newVariants = [...variants]
        newVariants[index] = { ...newVariants[index], [field]: value }
        setVariants(newVariants)
    }

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const getStockInfo = (productId: number) => {
        const inventory = mockInventory[productId]
        if (!inventory) return { stock: 0, status: "out_of_stock" }
        return { stock: inventory.stock, status: inventory.status }
    }

    const handleEdit = (product: any) => {
        setSelectedProduct(product)
        const stockInfo = getStockInfo(product.id)

        // Set form values using setValue
        setValue("name", product.name)
        setValue("category", product.category)
        setValue("price", product.price.toString())
        setValue("stock", stockInfo.stock.toString())
        setValue("description", product.description)
        setValue("sku", mockInventory[product.id]?.sku || "")

        setProductImages([product.image])
        setIsEditDialogOpen(true)
    }

    const onSubmit = (data: EditProductFormData) => {
        console.log("Updated product data:", data)
        console.log("Product ID:", selectedProduct?.id)
        console.log("Images:", productImages)
        console.log("Variants:", variants)
        // Handle product update logic here
        setIsEditDialogOpen(false)
        resetForm()
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files) return

        Array.from(files).forEach((file) => {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProductImages((prev) => [...prev, reader.result as string])
            }
            reader.readAsDataURL(file)
        })
    }

    return (
        <div>
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Product</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Category</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">SKU</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Price</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Stock</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map((product) => {
                                    const stockInfo = getStockInfo(product.id)
                                    const inventory = mockInventory[product.id]
                                    return (
                                        <tr key={product.id} className="border-b border-border/40 last:border-0 hover:bg-muted/50">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted">
                                                        <Image
                                                            src={product.image || "/placeholder.svg"}
                                                            alt={product.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-foreground">{product.name}</p>
                                                        <p className="text-sm text-muted-foreground line-clamp-1 max-w-75">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <Badge variant="secondary">{product.category}</Badge>
                                            </td>
                                            <td className="p-4">
                                                <p className="text-sm font-mono text-muted-foreground">{inventory?.sku || "N/A"}</p>
                                            </td>
                                            <td className="p-4">
                                                <p className="font-medium text-foreground">{product.priceFormatted}</p>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm text-foreground">{stockInfo.stock} units</p>
                                                    {stockInfo.status === "low_stock" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <Badge
                                                    variant={
                                                        stockInfo.status === "in_stock"
                                                            ? "default"
                                                            : stockInfo.status === "low_stock"
                                                                ? "secondary"
                                                                : "destructive"
                                                    }
                                                >
                                                    {stockInfo.status === "in_stock"
                                                        ? "In Stock"
                                                        : stockInfo.status === "low_stock"
                                                            ? "Low Stock"
                                                            : "Out of Stock"}
                                                </Badge>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link href={`/products/${product.id}`}>
                                                        <Button variant="ghost" size="icon">
                                                            <Eye className="h-4 w-4" />
                                                        </Button>
                                                    </Link>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon">
                                                                <MoreVertical className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className='border rounded-lg p-1'>
                                                            <DropdownMenuItem className='flex gap-1 items-center cursor-pointer hover:bg-accent rounded-sm p-1' onClick={() => handleEdit(product)}>
                                                                <Edit className="h-4 w-4 mr-2 text-gray-500" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-destructive flex gap-1 items-center cursor-pointer hover:bg-accent rounded-sm p-1">
                                                                <Trash className="h-4 w-4 mr-2 text-gray-500" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Edit Product Dialog */}
            <Dialog
                open={isEditDialogOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        setIsEditDialogOpen(false)
                        resetForm()
                    }
                }}
            >
                <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Edit Product</DialogTitle>
                        <DialogDescription>
                            Update product information
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Product Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter product name"
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Timepieces">Timepieces</SelectItem>
                                                <SelectItem value="Leather Goods">Leather Goods</SelectItem>
                                                <SelectItem value="Audio">Audio</SelectItem>
                                                <SelectItem value="Travel">Travel</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.category && (
                                    <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="sku">SKU</Label>
                                <Input
                                    id="sku"
                                    placeholder="e.g., EC-001"
                                    {...register("sku")}
                                />
                                {errors.sku && (
                                    <p className="text-xs text-red-500 mt-1">{errors.sku.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="price">Price ($)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    placeholder="0.00"
                                    {...register("price")}
                                />
                                {errors.price && (
                                    <p className="text-xs text-red-500 mt-1">{errors.price.message}</p>
                                )}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="stock">Stock</Label>
                                <Input
                                    id="stock"
                                    type="number"
                                    placeholder="0"
                                    {...register("stock")}
                                />
                                {errors.stock && (
                                    <p className="text-xs text-red-500 mt-1">{errors.stock.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Enter product description"
                                rows={3}
                                {...register("description")}
                            />
                            {errors.description && (
                                <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label>Product Images</Label>
                            <div className="space-y-3">
                                <label htmlFor="image-upload" className="block">
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                        <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB (multiple images allowed)</p>
                                    </div>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                </label>
                                {productImages.length > 0 && (
                                    <div className="grid grid-cols-4 gap-3">
                                        {productImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative aspect-square rounded-lg overflow-hidden bg-muted border group"
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`Product ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setProductImages(productImages.filter((_, i) => i !== index))}
                                                    className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label>Product Variants (Color, Size & Price)</Label>
                                <Button type="button" variant="outline" size="sm" onClick={addVariant}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Variant
                                </Button>
                            </div>
                            {variants.length > 0 && (
                                <div className="space-y-3 border rounded-lg p-4">
                                    {variants.map((variant, index) => (
                                        <div key={index} className="flex gap-3 items-start">
                                            <div className="flex-1 grid grid-cols-5 gap-3">
                                                <Input
                                                    placeholder="Color (e.g., Black)"
                                                    value={variant.color}
                                                    onChange={(e) => updateVariant(index, "color", e.target.value)}
                                                />
                                                <Input
                                                    placeholder="Size (e.g., M, 42)"
                                                    value={variant.size}
                                                    onChange={(e) => updateVariant(index, "size", e.target.value)}
                                                />
                                                <Input
                                                    placeholder="SKU"
                                                    value={variant.sku}
                                                    onChange={(e) => updateVariant(index, "sku", e.target.value)}
                                                />
                                                <Input
                                                    type="number"
                                                    placeholder="Price (optional)"
                                                    value={variant.price || ""}
                                                    onChange={(e) =>
                                                        updateVariant(index, "price", Number.parseFloat(e.target.value) || 0)
                                                    }
                                                />
                                                <Input
                                                    type="number"
                                                    placeholder="Stock"
                                                    value={variant.stock}
                                                    onChange={(e) => updateVariant(index, "stock", Number.parseInt(e.target.value) || 0)}
                                                />
                                            </div>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => removeVariant(index)}>
                                                <Trash className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {variants.length === 0 && (
                                <p className="text-sm text-muted-foreground text-center py-4 border rounded-lg border-dashed">
                                    {`No variants added. Click "Add Variant" to add color, size, and pricing options.`}
                                </p>
                            )}
                        </div>

                        <DialogFooter>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    setIsEditDialogOpen(false)
                                    resetForm()
                                }}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">
                                Update Product
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ProductsTable
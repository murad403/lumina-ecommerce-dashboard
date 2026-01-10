/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Controller, useForm } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Plus, Trash, Upload, X } from 'lucide-react'
import { Button } from '../ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import z from 'zod'
import Image from 'next/image'
import { editProductSchema } from '@/validation/validation'

type EditProductFormData = z.infer<typeof editProductSchema>

type TProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const EditProductDialog = ({ open, onOpenChange }: TProps) => {
    const [variants, setVariants] = useState<Array<{ color: string; size: string; sku: string; stock: number; price?: number }>>([])
    const [productImages, setProductImages] = useState<string[]>([])

    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<EditProductFormData>({
        resolver: zodResolver(editProductSchema),
        defaultValues: {
            name: "",
            category: "",
            sku: "",
            price: 0,
            stock: 0,
            description: ""
        }
    })

    const resetForm = () => {
        reset()
        setProductImages([])
        setVariants([])
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

    const removeImage = (index: number) => {
        setProductImages(productImages.filter((_, i) => i !== index))
    }

    const onSubmit = (data: EditProductFormData) => {
        const formData = {
            ...data,
            images: productImages,
            variants: variants
        }
        console.log("Updated product data:", formData)
        onOpenChange(false)
        resetForm()
    }

    const handleDialogClose = (open: boolean) => {
        if (!open) {
            onOpenChange(false)
            resetForm()
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleDialogClose}>
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
                                step="0.01"
                                placeholder="0.00"
                                {...register("price", { valueAsNumber: true })}
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
                                {...register("stock", { valueAsNumber: true })}
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
                                                onClick={() => removeImage(index)}
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
                                                step="0.01"
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
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            Update Product
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditProductDialog
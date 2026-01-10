"use client"
import EditCategoryDialog from '@/components/dialog/EditCategoryDialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Edit, Tag, Trash } from 'lucide-react'
import React, { useState } from 'react'

const categories = [
    { id: "1", name: "Timepieces", slug: "timepieces", products: 45, description: "Luxury watches and chronographs" },
    {
        id: "2",
        name: "Leather Goods",
        slug: "leather-goods",
        products: 89,
        description: "Premium wallets and accessories",
    },
    { id: "3", name: "Audio", slug: "audio", products: 32, description: "High-end audio equipment" },
    { id: "4", name: "Travel", slug: "travel", products: 28, description: "Luxury luggage and travel gear" },
    { id: "5", name: "Home", slug: "home", products: 40, description: "Designer home accessories" },
]

const CategoriesTable = () => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState<boolean>(false);
    
    const handleDeleteCategory = (id: number) => {
        console.log("Delete category with id:", id);
    }
    return (
        <div>
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Category</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Slug</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Products</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Description</th>
                                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category) => (
                                    <tr key={category.id} className="border-b border-border/40 last:border-0 hover:bg-muted/50">
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <Tag className="h-4 w-4 text-primary" />
                                                <p className="font-medium text-foreground">{category.name}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <Badge variant="secondary">{category.slug}</Badge>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm text-foreground">{category.products} items</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm text-muted-foreground">{category.description}</p>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button onClick={() => setIsEditDialogOpen(true)} variant="ghost" size="icon">
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button onClick={() => handleDeleteCategory(1)} variant="ghost" size="icon">
                                                    <Trash className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* dialog */}
            <EditCategoryDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}></EditCategoryDialog>
        </div>
    )
}

export default CategoriesTable

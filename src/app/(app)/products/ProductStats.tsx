import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Package } from 'lucide-react'
import React from 'react'

const ProductStats = () => {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                            <p className="text-2xl font-bold text-foreground">234</p>
                        </div>
                        <Package className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Active</p>
                            <p className="text-2xl font-bold text-foreground">198</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary">Active</Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                            <p className="text-2xl font-bold text-destructive">12</p>
                        </div>
                        <Badge variant="destructive">Alert</Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                            <p className="text-2xl font-bold text-foreground">24</p>
                        </div>
                        <Badge variant="outline">Inactive</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductStats

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Package, Tag } from 'lucide-react'
import React from 'react'

const CategoriesStats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Categories</p>
                            <p className="text-2xl font-bold text-foreground">5</p>
                        </div>
                        <Tag className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Products</p>
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
                            <p className="text-sm font-medium text-muted-foreground">Largest</p>
                            <p className="text-2xl font-bold text-foreground">89</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary">Leather Goods</Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Avg per Category</p>
                            <p className="text-2xl font-bold text-foreground">46.8</p>
                        </div>
                        <Badge variant="outline">products</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CategoriesStats

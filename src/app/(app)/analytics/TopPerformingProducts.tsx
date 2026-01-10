import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const TopPerformingProducts = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>Best sellers this month</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        { name: "Ethereal Chronograph", sales: 145, revenue: "$43,355", trend: "up" },
                        { name: "Onyx Carry-on", sales: 89, revenue: "$40,050", trend: "up" },
                        { name: "Vertex Audio Pods", sales: 123, revenue: "$24,477", trend: "down" },
                        { name: "Noir Leather Wallet", sales: 201, revenue: "$17,889", trend: "up" },
                    ].map((product) => (
                        <div
                            key={product.name}
                            className="flex items-center justify-between py-3 border-b border-border/40 last:border-0"
                        >
                            <div>
                                <p className="font-medium text-foreground">{product.name}</p>
                                <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                            </div>
                            <div className="text-right">
                                <p className="font-medium text-foreground">{product.revenue}</p>
                                <div className="flex items-center justify-end gap-1">
                                    {product.trend === "up" ? (
                                        <TrendingUp className="h-3 w-3 text-primary" />
                                    ) : (
                                        <TrendingDown className="h-3 w-3 text-destructive" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TopPerformingProducts

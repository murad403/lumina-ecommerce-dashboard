import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, Star, TrendingDown, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TopProducts = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Top Products</CardTitle>
                        <CardDescription>Best selling items this month</CardDescription>
                    </div>
                    <Link href="/admin/products">
                        <Button variant="ghost" size="sm">
                            View All
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        { name: "Ethereal Chronograph", sales: 145, revenue: "$43,355", rating: 4.9, trend: "up" },
                        { name: "Onyx Carry-on", sales: 89, revenue: "$40,050", rating: 4.8, trend: "up" },
                        { name: "Vertex Audio Pods", sales: 123, revenue: "$24,477", rating: 4.7, trend: "down" },
                        { name: "Noir Leather Wallet", sales: 201, revenue: "$17,889", rating: 5.0, trend: "up" },
                        { name: "Lumen Desk Lamp", sales: 67, revenue: "$12,060", rating: 4.6, trend: "up" },
                    ].map((product, index) => (
                        <div
                            key={product.name}
                            className="flex items-center gap-4 py-3 border-b border-border/40 last:border-0"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">{product.name}</p>
                                <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                            </div>
                            <div className="text-right">
                                <p className="font-medium text-foreground">{product.revenue}</p>
                                <div className="flex items-center gap-1 text-sm">
                                    {product.trend === "up" ? (
                                        <TrendingUp className="h-3 w-3 text-primary" />
                                    ) : (
                                        <TrendingDown className="h-3 w-3 text-destructive" />
                                    )}
                                    <Star className="h-3 w-3 fill-primary text-primary" />
                                    <span className="text-muted-foreground">{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default TopProducts

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const RevenueCategory = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Revenue breakdown by product category</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        { name: "Timepieces", revenue: "$18,492", percent: 41, color: "bg-primary" },
                        { name: "Leather Goods", revenue: "$13,569", percent: 30, color: "bg-primary/70" },
                        { name: "Audio", revenue: "$9,046", percent: 20, color: "bg-primary/50" },
                        { name: "Travel", revenue: "$4,124", percent: 9, color: "bg-primary/30" },
                    ].map((category) => (
                        <div key={category.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-foreground">{category.name}</span>
                                <span className="text-muted-foreground">{category.revenue}</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className={`h-full ${category.color}`} style={{ width: `${category.percent}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default RevenueCategory

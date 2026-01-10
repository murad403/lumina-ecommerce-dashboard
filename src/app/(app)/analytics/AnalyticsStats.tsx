import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, ShoppingCart, TrendingDown, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const AnalyticsStats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted-foreground">Revenue (30d)</p>
                        <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">$45,231</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+20.1%</span> vs last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted-foreground">Orders (30d)</p>
                        <ShoppingCart className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">573</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+12.5%</span> vs last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted-foreground">Customers (30d)</p>
                        <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">180</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+8.2%</span> vs last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                        <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">$78.95</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingDown className="h-3 w-3 text-destructive" />
                        <span className="text-destructive">-2.3%</span> vs last month
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default AnalyticsStats

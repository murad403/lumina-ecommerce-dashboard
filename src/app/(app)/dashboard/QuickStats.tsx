import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Package, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const QuickStats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-linear-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">$45,231</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+20.1%</span> from last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">573</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+12.5%</span> from last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Products</CardTitle>
                    <Package className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">234</div>
                    <p className="text-xs text-muted-foreground mt-2">12 low stock alerts</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Customers</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground">2,350</div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-2">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+180</span> new this month
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuickStats

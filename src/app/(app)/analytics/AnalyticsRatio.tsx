import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, Package, Star, TrendingUp } from 'lucide-react'
import React from 'react'

const AnalyticsRatio = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5 text-primary" />
                        Page Views
                    </CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-2">24,589</div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+15.3%</span> vs last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Conversion Rate
                    </CardTitle>
                    <CardDescription>Orders / Visitors</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-2">2.33%</div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span className="text-primary">+0.4%</span> vs last month
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Customer Satisfaction
                    </CardTitle>
                    <CardDescription>Average rating</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold text-foreground mb-2">4.8/5</div>
                    <p className="text-sm text-muted-foreground">Based on 284 reviews</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default AnalyticsRatio

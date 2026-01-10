import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { mockOrders } from '@/lib/admin-data'
import { CheckCircle2, Clock, Package, ShoppingCart } from 'lucide-react'
import React from 'react'

const OrderStats = () => {
    const orderStats = {
        total: mockOrders.length,
        pending: mockOrders.filter((o) => o.status === "pending").length,
        processing: mockOrders.filter((o) => o.status === "processing" || o.status === "confirmed").length,
        completed: mockOrders.filter((o) => o.status === "delivered").length,
    }
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                            <p className="text-2xl font-bold text-foreground">{orderStats.total}</p>
                        </div>
                        <ShoppingCart className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Pending</p>
                            <p className="text-2xl font-bold text-foreground">{orderStats.pending}</p>
                        </div>
                        <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                        </Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Processing</p>
                            <p className="text-2xl font-bold text-foreground">{orderStats.processing}</p>
                        </div>
                        <Badge variant="secondary">
                            <Package className="h-3 w-3 mr-1" />
                            Active
                        </Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Completed</p>
                            <p className="text-2xl font-bold text-foreground">{orderStats.completed}</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Done
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default OrderStats

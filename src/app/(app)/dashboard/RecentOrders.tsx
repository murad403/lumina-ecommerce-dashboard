import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RecentOrders = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>Latest customer orders</CardDescription>
                    </div>
                    <Link href="/orders">
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
                        {
                            id: "#ORD-2453",
                            customer: "Marcus Chen",
                            amount: "$299.00",
                            status: "pending",
                            time: "2 mins ago",
                        },
                        {
                            id: "#ORD-2452",
                            customer: "Sarah Johnson",
                            amount: "$89.00",
                            status: "processing",
                            time: "15 mins ago",
                        },
                        { id: "#ORD-2451", customer: "David Park", amount: "$450.00", status: "shipped", time: "1 hour ago" },
                        {
                            id: "#ORD-2450",
                            customer: "Emma Wilson",
                            amount: "$199.00",
                            status: "delivered",
                            time: "3 hours ago",
                        },
                        {
                            id: "#ORD-2449",
                            customer: "Alex Rivera",
                            amount: "$89.00",
                            status: "delivered",
                            time: "5 hours ago",
                        },
                    ].map((order) => (
                        <div
                            key={order.id}
                            className="flex items-center justify-between py-3 border-b border-border/40 last:border-0"
                        >
                            <div className="flex-1">
                                <p className="font-medium text-foreground">{order.id}</p>
                                <p className="text-sm text-muted-foreground">{order.customer}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Badge
                                    variant={
                                        order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"
                                    }
                                >
                                    {order.status}
                                </Badge>
                                <p className="font-medium text-foreground min-w-20 text-right">{order.amount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default RecentOrders

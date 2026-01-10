"use client"
import OrderDetailsDialog from '@/components/dialog/OrderDetailsDialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mockOrders, Order } from '@/lib/admin-data'
import { Eye } from 'lucide-react'
import React, { useState } from 'react'

type TProps = {
    searchQuery: string
    statusFilter: string
}

const OrdersTable = ({ searchQuery, statusFilter }: TProps) => {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
    const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

    const filteredOrders = mockOrders.filter((order) => {
        const matchesSearch =
            order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customerEmail.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === "all" || order.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const handleStatusUpdate = (orderId: string, newStatus: Order["status"]) => {
        console.log("Updating order", orderId, "to status:", newStatus)
    }

    const viewOrderDetails = (order: Order) => {
        setSelectedOrder(order)
        setIsDetailDialogOpen(true)
    }

    return (
        <div>
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Order</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Payment</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Total</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="border-b border-border/40 last:border-0 hover:bg-muted/50">
                                        <td className="p-4">
                                            <div>
                                                <p className="font-medium text-foreground">{order.orderNumber}</p>
                                                <p className="text-xs text-muted-foreground">TRX: {order.transactionId}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div>
                                                <p className="font-medium text-foreground">{order.customerName}</p>
                                                <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm text-foreground">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex flex-col gap-1">
                                                <Badge
                                                    variant={
                                                        order.paymentStatus === "verified"
                                                            ? "default"
                                                            : order.paymentStatus === "failed"
                                                                ? "destructive"
                                                                : "outline"
                                                    }
                                                    className="w-fit"
                                                >
                                                    {order.paymentStatus}
                                                </Badge>
                                                <p className="text-xs text-muted-foreground uppercase">{order.paymentMethod}</p>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-medium text-foreground">৳{order.total.toFixed(2)}</p>
                                        </td>
                                        <td className="p-4">
                                            <Select
                                                value={order.status}
                                                onValueChange={(value) => handleStatusUpdate(order.id, value as Order["status"])}
                                            >
                                                <SelectTrigger className="w-35">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                    <SelectItem value="confirmed">Confirmed</SelectItem>
                                                    <SelectItem value="processing">Processing</SelectItem>
                                                    <SelectItem value="shipped">Shipped</SelectItem>
                                                    <SelectItem value="delivered">Delivered</SelectItem>
                                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon" onClick={() => viewOrderDetails(order)}>
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <OrderDetailsDialog 
                order={selectedOrder}
                isOpen={isDetailDialogOpen}
                onClose={() => setIsDetailDialogOpen(false)}
            />
        </div>
    )
}

export default OrdersTable
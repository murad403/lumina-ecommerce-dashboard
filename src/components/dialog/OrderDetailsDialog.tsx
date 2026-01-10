"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Order } from '@/lib/admin-data'
import { CheckCircle2, XCircle } from 'lucide-react'
import Image from 'next/image'

type TProps = {
    order: Order | null
    isOpen: boolean
    onClose: () => void
}

const OrderDetailsDialog = ({ order, isOpen, onClose }: TProps) => {
    
    const handlePaymentVerification = (orderId: string, status: "verified" | "failed") => {
        console.log("Verifying payment for order", orderId, "status:", status)
        // Add your payment verification logic here
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                    <DialogDescription>Complete information about this order</DialogDescription>
                </DialogHeader>
                {order && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="text-muted-foreground">Order Number</Label>
                                <p className="font-medium">{order.orderNumber}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Date</Label>
                                <p className="font-medium">{new Date(order.createdAt).toLocaleString()}</p>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Status</Label>
                                <Badge className="mt-1">{order.status}</Badge>
                            </div>
                            <div>
                                <Label className="text-muted-foreground">Payment Status</Label>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                    <Badge
                                        variant={
                                            order.paymentStatus === "verified"
                                                ? "default"
                                                : order.paymentStatus === "failed"
                                                    ? "destructive"
                                                    : "outline"
                                        }
                                    >
                                        {order.paymentStatus}
                                    </Badge>
                                    {order.paymentStatus === "pending" && (
                                        <div className="flex gap-1">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handlePaymentVerification(order.id, "verified")}
                                            >
                                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                                Verify
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-destructive bg-transparent"
                                                onClick={() => handlePaymentVerification(order.id, "failed")}
                                            >
                                                <XCircle className="h-3 w-3 mr-1" />
                                                Reject
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-3">Customer Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-muted-foreground">Name</Label>
                                    <p className="font-medium">{order.customerName}</p>
                                </div>
                                <div>
                                    <Label className="text-muted-foreground">Email</Label>
                                    <p className="font-medium">{order.customerEmail}</p>
                                </div>
                                <div>
                                    <Label className="text-muted-foreground">Phone</Label>
                                    <p className="font-medium">{order.customerPhone}</p>
                                </div>
                                <div>
                                    <Label className="text-muted-foreground">Shipping Address</Label>
                                    <p className="font-medium">
                                        {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
                                        {order.shippingAddress.postalCode}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-3">Payment Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-muted-foreground">Payment Method</Label>
                                    <p className="font-medium uppercase">{order.paymentMethod}</p>
                                </div>
                                <div>
                                    <Label className="text-muted-foreground">Transaction ID</Label>
                                    <p className="font-medium font-mono text-sm">{order.transactionId}</p>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-3">Order Items</h3>
                            <div className="space-y-3">
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                                            <Image
                                                width={500}
                                                height={500}
                                                src={item.productImage || "/placeholder.svg"}
                                                alt={item.productName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{item.productName}</p>
                                            <p className="text-sm text-muted-foreground">
                                                Qty: {item.quantity} × ৳{item.price.toFixed(2)}
                                            </p>
                                            {(item.selectedColor || item.selectedSize) && (
                                                <p className="text-xs text-muted-foreground">
                                                    {item.selectedColor} {item.selectedSize}
                                                </p>
                                            )}
                                        </div>
                                        <p className="font-medium">৳{(item.quantity * item.price).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-3">Order Summary</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>৳{order.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>৳{order.shipping.toFixed(2)}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span className="text-primary">৳{order.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default OrderDetailsDialog
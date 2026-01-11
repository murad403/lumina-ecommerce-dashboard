"use client"
import AddProductDialog from '@/components/dialog/AddProductDialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Package, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const QuickActions = () => {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
    return (
        <Card className="lg:col-span-3 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Quick Actions
                </CardTitle>
                <CardDescription>Manage your store efficiently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">

                <Button onClick={() => { setIsAddDialogOpen(true) }} className="w-full justify-start bg-transparent" variant="outline">
                    <Package className="mr-2 h-4 w-4" />
                    Add New Product
                </Button>

                <Link href="/orders?status=pending">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Process Pending Orders
                        <Badge variant="destructive" className="ml-auto">
                            23
                        </Badge>
                    </Button>
                </Link>
                <Link href="/reviews?status=pending">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                        <Star className="mr-2 h-4 w-4" />
                        Review Customer Feedback
                        <Badge variant="destructive" className="ml-auto">
                            48
                        </Badge>
                    </Button>
                </Link>
                <Link href="/products?filter=low-stock">
                    <Button className="w-full justify-start bg-transparent" variant="outline">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Check Low Stock Items
                        <Badge variant="outline" className="ml-auto">
                            12
                        </Badge>
                    </Button>
                </Link>
            </CardContent>

            <AddProductDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}></AddProductDialog>
        </Card>
    )
}

export default QuickActions

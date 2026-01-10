import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Mail } from 'lucide-react';
import React from 'react'

type TCustomer = {
    id: string;
    name: string;
    email: string;
    orders: number;
    spent: string;
    joined: string;
    status: string;
}

type TProps = {
    filteredCustomers: TCustomer[];
}

const CustomersTable = ({ filteredCustomers }: TProps) => {
    return (
        <div className="">
            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Orders</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Total Spent</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Joined</th>
                                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                                    <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="border-b border-border/40 last:border-0 hover:bg-muted/50">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarFallback className="bg-primary/10 text-primary">
                                                        {customer.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-foreground">{customer.name}</p>
                                                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm text-foreground">{customer.orders}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-medium text-foreground">{customer.spent}</p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-sm text-foreground">{customer.joined}</p>
                                        </td>
                                        <td className="p-4">
                                            <Badge
                                                variant={
                                                    customer.status === "vip" ? "default" : customer.status === "new" ? "secondary" : "outline"
                                                }
                                            >
                                                {customer.status}
                                            </Badge>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button variant="ghost" size="icon">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button variant="ghost" size="icon">
                                                    <Mail className="h-4 w-4" />
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
        </div>
    )
}

export default CustomersTable

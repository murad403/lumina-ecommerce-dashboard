import { Card, CardContent } from '@/components/ui/card'
import { Badge, Crown, UserPlus, Users } from 'lucide-react'
import React from 'react'

const CustomerStats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                            <p className="text-2xl font-bold text-foreground">2,350</p>
                        </div>
                        <Users className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">New This Month</p>
                            <p className="text-2xl font-bold text-foreground">180</p>
                        </div>
                        <UserPlus className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Active</p>
                            <p className="text-2xl font-bold text-foreground">1,245</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary">Active</Badge>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">VIP Members</p>
                            <p className="text-2xl font-bold text-foreground">89</p>
                        </div>
                        <Crown className="h-8 w-8 text-primary" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CustomerStats

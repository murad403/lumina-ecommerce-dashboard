import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const Notifications = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage email and push notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Order Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive alerts for new orders</p>
                    </div>
                    <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Review Notifications</p>
                        <p className="text-sm text-muted-foreground">Get notified about new customer reviews</p>
                    </div>
                    <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Low Stock Alerts</p>
                        <p className="text-sm text-muted-foreground">Alert when products are running low</p>
                    </div>
                    <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Marketing Updates</p>
                        <p className="text-sm text-muted-foreground">Receive product and feature updates</p>
                    </div>
                    <Switch />
                </div>
            </CardContent>
        </Card>
    )
}

export default Notifications

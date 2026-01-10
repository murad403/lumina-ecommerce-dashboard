import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import React from 'react'

const StoreSettings = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Store Settings</CardTitle>
                <CardDescription>Configure store behavior and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Maintenance Mode</p>
                        <p className="text-sm text-muted-foreground">Temporarily disable the storefront</p>
                    </div>
                    <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Guest Checkout</p>
                        <p className="text-sm text-muted-foreground">Allow purchases without account creation</p>
                    </div>
                    <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Customer Reviews</p>
                        <p className="text-sm text-muted-foreground">Enable product reviews and ratings</p>
                    </div>
                    <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-foreground">Auto-approve Reviews</p>
                        <p className="text-sm text-muted-foreground">Publish reviews without manual approval</p>
                    </div>
                    <Switch />
                </div>
            </CardContent>
        </Card>
    )
}

export default StoreSettings

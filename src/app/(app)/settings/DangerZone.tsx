"use client"
import DeleteAllDataDialog from '@/components/dialog/DeleteAllDataDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState } from 'react'

const DangerZone = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <Card className="border-destructive/50">
                <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Irreversible actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-destructive/50 rounded-lg">
                        <div>
                            <p className="font-medium text-foreground">Delete All Data</p>
                            <p className="text-sm text-muted-foreground">Permanently remove all store data</p>
                        </div>
                        <Button onClick={() => setIsOpen(true)} variant="destructive">Delete</Button>
                    </div>
                </CardContent>
            </Card>

            <DeleteAllDataDialog open={isOpen} onOpenChange={setIsOpen}></DeleteAllDataDialog>
        </div>
    )
}

export default DangerZone

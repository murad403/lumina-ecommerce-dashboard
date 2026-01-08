
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'


const RevenueChart = () => {
    return (
        <Card className="lg:col-span-4">
            <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue for the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-75 flex items-end justify-between gap-2 px-4">
                    {[
                        { month: "Jan", amount: 32000, percent: 65 },
                        { month: "Feb", amount: 28000, percent: 55 },
                        { month: "Mar", amount: 38000, percent: 75 },
                        { month: "Apr", amount: 35000, percent: 70 },
                        { month: "May", amount: 42000, percent: 85 },
                        { month: "Jun", amount: 45231, percent: 95 },
                    ].map((data) => (
                        <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full bg-primary/20 rounded-t-lg relative" style={{ height: `${data.percent}%` }}>
                                <div className="absolute inset-0 bg-linear-to-t from-primary to-primary/50 rounded-t-lg" />
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-medium text-foreground">${(data.amount / 1000).toFixed(0)}K</p>
                                <p className="text-xs text-muted-foreground">{data.month}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default RevenueChart

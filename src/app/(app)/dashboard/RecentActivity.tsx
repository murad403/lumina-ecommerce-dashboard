import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RecentActivity = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Customer Reviews</CardTitle>
                <CardDescription>Latest feedback from your customers</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {[
                        {
                            customer: "Alex Rivera",
                            product: "Noir Leather Wallet",
                            rating: 5,
                            comment: "The leather quality is exceptional. Perfect slim design for front pocket carry...",
                            time: "10 mins ago",
                            status: "approved",
                        },
                        {
                            customer: "James Lee",
                            product: "Vertex Audio Pods",
                            rating: 5,
                            comment: "Best earbuds I've owned. Sound quality is crystal clear and noise cancellation is...",
                            time: "1 hour ago",
                            status: "approved",
                        },
                        {
                            customer: "David Park",
                            product: "Ethereal Chronograph",
                            rating: 4,
                            comment: "Beautiful watch, though the price point is quite high. Quality is undeniable...",
                            time: "3 hours ago",
                            status: "pending",
                        },
                        {
                            customer: "Emma Wilson",
                            product: "Onyx Carry-on",
                            rating: 5,
                            comment: "Premium quality luggage. The wheels glide smoothly and it's surprisingly...",
                            time: "5 hours ago",
                            status: "approved",
                        },
                    ].map((review, index) => (
                        <div key={index} className="py-4 border-b border-border/40 last:border-0">
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-medium text-foreground">{review.customer}</p>
                                        <Badge variant={review.status === "approved" ? "default" : "outline"} className="text-xs">
                                            {review.status}
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{review.product}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">{review.time}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                    ))}
                </div>
                <Link href="/reviews">
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                        Manage All Reviews
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default RecentActivity

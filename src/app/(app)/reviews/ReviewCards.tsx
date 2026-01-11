import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Trash, X } from 'lucide-react';
import React from 'react'

type TReview = {
    id: string;
    customer: string;
    product: string;
    rating: number;
    comment: string;
    date: string;
    status: string;
}

type TProps = {
    filteredReviews: TReview[];
}

const ReviewCards = ({ filteredReviews }: TProps) => {
    return (
        <div className="grid gap-6">
            {filteredReviews.map((review) => (
                <Card key={review.id}>
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4 flex-1">
                                <Avatar>
                                    <AvatarFallback className="bg-primary/10 text-primary">
                                        {review.customer
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-medium text-foreground">{review.customer}</p>
                                        <Badge variant={review.status === "approved" ? "default" : "secondary"}>{review.status}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{review.product}</p>
                                    <div className="flex items-center gap-1 mt-2">
                                        {Array.from({ length: review.rating }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                        ))}
                                        {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                        ))}
                                        <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {review.status === "pending" && (
                                    <>
                                        <Button size="sm" variant="outline">
                                            <Check className="h-4 w-4 mr-2" />
                                            Approve 
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            <X className="h-4 w-4 mr-2" />
                                            Reject
                                        </Button>
                                    </>
                                )}
                                <Button size="sm" variant="ghost">
                                    <Trash className="h-4 w-4 text-destructive" />
                                </Button>
                            </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{review.comment}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default ReviewCards

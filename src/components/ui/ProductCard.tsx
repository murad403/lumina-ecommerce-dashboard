"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"

interface ProductCardProps {
    id?: number
    name: string
    price: string
    image: string
    tag?: string
}

const ProductCard = ({ id = 1, name, price, image, tag }: ProductCardProps) => {
    return (
        <Link
            href={`/product/${id}`}
            className="block group relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-all"
        >
            <div className="aspect-4/5 relative">
                <Image
                    width={500}
                    height={500}
                    src={image || "/placeholder.svg"}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {tag && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{tag}</Badge>}
                <button

                    className={`absolute top-4 right-4 p-2 rounded-full transition-all bg-background/80 text-foreground hover:text-primary`}
                >
                    <Heart className={`w-4 h-4 fill-current`} />
                </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h3 className="font-medium text-lg leading-tight">{name}</h3>
                <p className="text-primary font-bold">{price}</p>
                {/* <Button onClick={handleAddToCart} className="w-full mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          Quick Add
        </Button> */}
            </div>
        </Link>
    )
}

export default ProductCard;
"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search} from "lucide-react"
import ReviewStats from "./ReviewStats"
import ReviewCards from "./ReviewCards"

const reviews = [
  {
    id: "1",
    customer: "Marcus Chen",
    product: "Ethereal Chronograph",
    rating: 5,
    comment: "Absolutely stunning timepiece. The craftsmanship is impeccable and it feels luxurious on the wrist.",
    date: "2024-01-15",
    status: "approved",
  },
  {
    id: "2",
    customer: "Sarah Johnson",
    product: "Ethereal Chronograph",
    rating: 5,
    comment: "Worth every penny. The gold finish is sophisticated and the minimalist design is timeless.",
    date: "2024-01-10",
    status: "approved",
  },
  {
    id: "3",
    customer: "David Park",
    product: "Ethereal Chronograph",
    rating: 4,
    comment: "Beautiful watch, though the price point is quite high. Quality is undeniable.",
    date: "2024-01-05",
    status: "approved",
  },
  {
    id: "4",
    customer: "Alex Rivera",
    product: "Noir Leather Wallet",
    rating: 5,
    comment: "The leather quality is exceptional. Perfect slim design for front pocket carry.",
    date: "2024-01-20",
    status: "approved",
  },
  {
    id: "5",
    customer: "Emma Wilson",
    product: "Noir Leather Wallet",
    rating: 5,
    comment: "Bought this as a gift and my partner loves it. Looks even better in person!",
    date: "2024-01-18",
    status: "approved",
  },
  {
    id: "6",
    customer: "James Lee",
    product: "Vertex Audio Pods",
    rating: 5,
    comment: "Best earbuds I've owned. Sound quality is crystal clear and noise cancellation is amazing.",
    date: "2024-01-22",
    status: "pending",
  },
  {
    id: "7",
    customer: "Olivia Martinez",
    product: "Vertex Audio Pods",
    rating: 4,
    comment: "Great audio quality and comfortable fit. Battery life is impressive as advertised.",
    date: "2024-01-19",
    status: "pending",
  },
  {
    id: "8",
    customer: "Ryan Thompson",
    product: "Onyx Carry-on",
    rating: 5,
    comment: "Premium quality luggage. The wheels glide smoothly and it's surprisingly lightweight.",
    date: "2024-01-25",
    status: "pending",
  },
]

const AdminReviews = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "approved" | "pending">("all")

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || review.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background space-y-6">
      {/* Header */}
      <div className="border-b border-border/40 bg-card/50 backdrop-blur">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Reviews</h1>
              <p className="text-muted-foreground mt-1">Manage customer reviews and feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <ReviewStats></ReviewStats>


      {/* Filters and search*/}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search reviews..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant={filterStatus === "all" ? "default" : "outline"} onClick={() => setFilterStatus("all")}>
            All
          </Button>
          <Button
            variant={filterStatus === "approved" ? "default" : "outline"}
            onClick={() => setFilterStatus("approved")}
          >
            Approved
          </Button>
          <Button
            variant={filterStatus === "pending" ? "default" : "outline"}
            onClick={() => setFilterStatus("pending")}
          >
            Pending
          </Button>
        </div>
      </div>

      {/* Reviews cart */}
      <ReviewCards filteredReviews={filteredReviews}></ReviewCards>

    </div>
  )
}


export default AdminReviews;
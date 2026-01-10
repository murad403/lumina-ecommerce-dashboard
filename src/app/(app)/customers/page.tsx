"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search} from "lucide-react"
import CustomerStats from "./CustomerStats"
import CustomersTable from "./CustomersTable"

const customers = [
  {
    id: "1",
    name: "Marcus Chen",
    email: "marcus@email.com",
    orders: 12,
    spent: "$3,588",
    joined: "2023-08-15",
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@email.com",
    orders: 8,
    spent: "$1,250",
    joined: "2023-09-22",
    status: "active",
  },
  {
    id: "3",
    name: "David Park",
    email: "david@email.com",
    orders: 15,
    spent: "$6,750",
    joined: "2023-07-10",
    status: "vip",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma@email.com",
    orders: 5,
    spent: "$995",
    joined: "2023-11-05",
    status: "active",
  },
  {
    id: "5",
    name: "Alex Rivera",
    email: "alex@email.com",
    orders: 20,
    spent: "$8,920",
    joined: "2023-06-18",
    status: "vip",
  },
  {
    id: "6",
    name: "James Lee",
    email: "james@email.com",
    orders: 3,
    spent: "$597",
    joined: "2024-01-03",
    status: "new",
  },
  {
    id: "7",
    name: "Olivia Martinez",
    email: "olivia@email.com",
    orders: 9,
    spent: "$2,691",
    joined: "2023-10-12",
    status: "active",
  },
  {
    id: "8",
    name: "Ryan Thompson",
    email: "ryan@email.com",
    orders: 7,
    spent: "$3,150",
    joined: "2023-08-28",
    status: "active",
  },
]

const AdminCustomers = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="bg-background space-y-6">
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
              <h1 className="text-3xl font-bold text-foreground">Customers</h1>
              <p className="text-muted-foreground mt-1">Manage your customer base</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <CustomerStats></CustomerStats>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search customers..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Customers Table */}
      <CustomersTable filteredCustomers={filteredCustomers}></CustomersTable>
    </div>
  )
}

export default AdminCustomers;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import ProductStats from "./ProductStats"
import ProductsTable from "./ProductsTable"

const AdminProducts = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <ProductStats></ProductStats>

            {/* search and filter */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                    </Button>
                </div>
                <Button
                    onClick={() => {
                        resetForm()
                        setIsAddDialogOpen(true)
                    }}
                    className="bg-primary text-primary-foreground"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                </Button>
            </div>

            {/* Products Table */}
            <ProductsTable searchQuery={searchQuery}></ProductsTable>
        </div>
    )
}

export default AdminProducts;
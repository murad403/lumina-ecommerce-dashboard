"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import CategoriesStats from "./CategoriesStats"
import AddCategoryDialog from "@/components/dialog/AddCategoryDialog"
import CategoriesTable from "./CategoriesTable"


const AdminCategories = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false)

  return (
    <div className="space-y-6">
      {/* stats */}
      <CategoriesStats></CategoriesStats>


      <div className="flex justify-end">
        <Button onClick={() => setIsAddDialogOpen(true)} className="bg-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* categories list */}
      <CategoriesTable></CategoriesTable>

      <AddCategoryDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}></AddCategoryDialog>
    </div>
  )
}

export default AdminCategories;
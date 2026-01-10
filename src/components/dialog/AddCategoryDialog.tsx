import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import z from "zod"
import { addCategorySchema } from "@/validation/validation"
import { zodResolver } from "@hookform/resolvers/zod"

type TProps = {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>> | ((open: boolean) => void)
}

type Inputs = z.infer<typeof addCategorySchema>;

const AddCategoryDialog = ({ open, onOpenChange }: TProps) => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm<Inputs>({
        resolver: zodResolver(addCategorySchema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        console.log(data);
        // onOpenChange(false);
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>Create a new product category</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Category Name</Label>
                        <Input {...register("name")} placeholder="Enter category name" />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input {...register("slug")} placeholder="category-slug" />
                        {errors.slug && <p className="text-sm text-red-500">{errors.slug.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea {...register("description")} placeholder="Enter category description" rows={3} />
                        {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick  ={handleSubmit(onSubmit)}>
                        Create Category
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCategoryDialog
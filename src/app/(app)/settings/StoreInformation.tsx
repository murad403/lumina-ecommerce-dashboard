import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { storeInformationSchema } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'

type Inputs = z.infer<typeof storeInformationSchema>

const StoreInformation = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<Inputs>({
        resolver: zodResolver(storeInformationSchema),
        defaultValues: {
            storeName: "Luxe Store",
            contactEmail: "contact@luxestore.com",
            storeDescription: "Premium luxury goods for the modern minimalist"
        }
    });

    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        console.log(data);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Store Information</CardTitle>
                <CardDescription>Update your store details and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="store-name">Store Name</Label>
                    <Input {...register("storeName")} />
                    {errors.storeName && <p className="text-sm text-red-500">{errors.storeName.message}</p>}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="store-email">Contact Email</Label>
                    <Input {...register("contactEmail")} id="store-email" type="email" />
                    {errors.contactEmail && <p className="text-sm text-red-500">{errors.contactEmail.message}</p>}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="store-description">Store Description</Label>
                    <Textarea {...register("storeDescription")} id="store-description" rows={3} />
                    {errors.storeDescription && <p className="text-sm text-red-500">{errors.storeDescription.message}</p>}
                </div>
                <Button onClick={handleSubmit(onSubmit)}>Save Changes</Button>
            </CardContent>
        </Card>
    )
}

export default StoreInformation

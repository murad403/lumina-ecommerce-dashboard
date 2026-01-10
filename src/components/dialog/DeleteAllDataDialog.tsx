import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { AlertTriangle } from "lucide-react";

type TProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const DeleteAllDataDialog = ({ open, onOpenChange }: TProps) => {
    
    const handleDelete = () => {
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                            <DialogTitle className="text-left">Delete All Data</DialogTitle>
                        </div>
                    </div>
                    <DialogDescription className="text-left pt-2">
                        This action cannot be undone. All of your data will be permanently deleted from our servers.
                    </DialogDescription>
                </DialogHeader>
                
                <div className="rounded-md bg-red-50 border border-red-200 p-3">
                    <p className="text-sm text-red-800 font-medium">
                        Warning: This will delete all categories, products, and related data.
                    </p>
                </div>

                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button 
                        variant="destructive" 
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        Yes, Delete All Data
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteAllDataDialog
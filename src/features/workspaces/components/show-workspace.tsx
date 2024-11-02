import { useWorkspaces } from "../api/use-workspace"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"

const ShowWorkspace = () => {
    const { data, isLoading } = useWorkspaces()

    if (isLoading) return <div> <Skeleton className="w-full h-10" /></div>
    if (!data) return <div>No data</div>


    return <Dialog>
        <DialogTrigger asChild>
            <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
            <div>{data?.workspaceId}</div>
            <Input placeholder="Workspace Name" />
            <Button variant="outline">Save</Button>
            <DialogClose asChild>
                <Button variant="outline">Close</Button>
            </DialogClose>
        </DialogContent>
    </Dialog>
}

export default ShowWorkspace
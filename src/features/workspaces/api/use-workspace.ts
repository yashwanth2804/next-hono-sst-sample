import { client } from "@/lib/rpc"
import { useQuery } from "@tanstack/react-query"
import { InferResponseType } from "hono"

type WorkspacesResponse = InferResponseType<typeof client.api.workspaces["$get"]>
export const useWorkspaces = () => {
    return useQuery<WorkspacesResponse, Error>({
        queryKey: ['workspaces'],
        queryFn: async () => {
            const res = await client.api.workspaces["$get"]()
            return res.json()
        }
    })
}
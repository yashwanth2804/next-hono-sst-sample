import { useMutation, useQuery } from "@tanstack/react-query"
import { client } from "@/lib/rpc"
import { InferRequestType, InferResponseType } from "hono"


type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>
type RequestType = InferRequestType<typeof client.api.auth.login["$post"]>

export const useLogin = () => {
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (data) => {
            const res = await client.api.auth.login["$post"](data)
            return res.json()
        },
    })
    return mutation
}

type ProfileResponse = InferResponseType<typeof client.api.auth.profile[":username"]["$get"]>
export const useProfile = (username: string) => {
    return useQuery<ProfileResponse, Error>({
        queryKey: ['profile', username],
        queryFn: async () => {
            const res = await client.api.auth.profile[`:username`]["$get"]({ param: { username } })
            return res.json()
        },
    })
}
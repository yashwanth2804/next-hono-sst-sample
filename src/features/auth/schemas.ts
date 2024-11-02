import { z } from "zod";

export const logInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type LogInSchema = z.infer<typeof logInSchema>
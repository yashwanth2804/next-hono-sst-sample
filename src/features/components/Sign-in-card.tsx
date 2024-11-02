import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useLogin, useProfile } from "@/features/auth/api/use-login"
import { logInSchema, LogInSchema } from "@/features/auth/schemas"


const SignInCard = () => {
    const { mutate } = useLogin()

    const { data, isLoading, error } = useProfile("test")

    const form = useForm<LogInSchema>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: LogInSchema) => {
        mutate({ json: data })
    }


    return <Card>
        <CardHeader>
            <CardTitle className="text-center">Sign in to your account</CardTitle>
            <CardDescription>Enter your email below to sign in to your account</CardDescription>
        </CardHeader>
        <CardContent >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <Button type="submit">Sign in</Button>
                </form>

            </Form>
        </CardContent>
        <CardFooter>
            {isLoading && <p>Loading...</p>}
            {data && <p>{data.userType} -- {data.username}</p>}
        </CardFooter>
    </Card>
}

export default SignInCard
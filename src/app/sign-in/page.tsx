"use client"

import { Button } from "@/components/ui/button"
import SignInCard from "@/features/components/Sign-in-card"

import ShowWorkspace from "@/features/workspaces/components/show-workspace"
import Link from "next/link"

const SignIn = () => {
    return <div className="flex justify-center items-center h-screen">
        <SignInCard />
        <Link href="/workspace">
            <Button>Go to Workspace</Button>
        </Link>
    </div>
}

export default SignIn

interface SignInLayoutProps {
    children: React.ReactNode
}

const SignInLayout = ({ children }: SignInLayoutProps) => {
    return <div className="  mx-auto w-full max-w-xl my-12">{children}</div>
}

export default SignInLayout
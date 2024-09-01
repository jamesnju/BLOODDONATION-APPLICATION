"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Github from "next-auth/providers/github"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export function Login() {
  const { data: session, status } = useSession();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const result = await signIn('credentials',
      {
        redirect: false,
        email,
        password,
      });
      if(result?.error){
        toast.error(
          <p>Invalid credentials <span className="h-10 w-10">😌😌</span></p>
      )}else{
        toast.success(
            <p>Login in success <span className="h-10 w-10 text-bla">🙂🙂</span></p>
      )
      router.push('/main');
      }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/main');
      toast.success(
        <div className="flex">
          <p>Login Success</p>
        </div>)
    }
  }, [status, router]);

  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: '/main' });
  };

  if (status === 'loading') {
    return <p className="items-center w-full justify-center text-center">Loading...</p>;
  }
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-screen">
        <div className="relative flex items-center justify-center bg-[url('/login-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 mix-blend-multiply" />
          <div className="relative z-10 text-center text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Welcome Back</h1>
            <p className="mt-3 text-lg">Log in to your account and start exploring our platform.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 sm:p-12">
          <div className="w-full max-w-md space-y-6">
            <span className="w-full flex text-center justify-center"> Sign in with</span>
            <div className="flex md:flex-nowrap flex-wrap justify-around gap-2">
              <Button variant="outline" className="flex-1 text-black" onClick={() => handleSignIn('github')}>
                <GithubIcon className="mr-1 " size={20} />
                GitHub
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => handleSignIn('google')}>
                <ChromeIcon className="mr-1  text-red-600" size={50} />
                Google
              </Button>
              <Button variant="outline" className="flex-1">
                <FacebookIcon className="mr-2 text-blue-900" size={20} />
                Facebook
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-">Or continue with</span>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit}>

              <div className="space-y-2">
                <div className="space-y-1 flex flex-col">
                  <Label htmlFor="username">Username</Label>
                  {email}
                  <Input id="username"
                    className="w-full h-14 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  {password}
                  <Input id="password" type="password"
                    className="w-full h-14 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl" placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)} />
                </div>
                <Button type="submit" className="w-full">
                  { isLoading ? "Loading.." : "Sign In "}
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <Link href="#" className="text-sm underline underline-offset-4" prefetch={false}>
                Forgot password?
              </Link>
              <Link href="/register" className="text-sm underline underline-offset-4" prefetch={false}>
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

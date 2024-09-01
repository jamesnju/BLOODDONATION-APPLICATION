"use client"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"

export function Profile() {
  const {data: session} = useSession();
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="bg-muted/20 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold text-black">{session?.user?.name ?? " userName"}</h2>
            {/* <p className="text-muted-foreground">Software Engineer</p> */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-2 text-muted-foreground">
            <div>
              <span className="font-medium">Age:</span>
            </div>
            <div>
              <span>32</span>
            </div>
            <div>
              <span className="font-medium">Blood Group:</span>
            </div>
            <div>
              <span>O+</span>
            </div>
            <div>
              <span className="font-medium">Phone:</span>
            </div>
            <div>
              <span>+1 (555) 123-4567</span>
            </div>
            <div>
              <span className="font-medium">Address:</span>
            </div>
            <div>
              <span>123 Main St, Anytown USA</span>
            </div>
            <div>
              <span className="font-medium">Email:</span>
            </div>
            <div>
              <span>john.doe@example.com</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

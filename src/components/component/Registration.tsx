"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { registerUser } from "../../../actions/auth/Auth"
import { toast } from "react-toastify"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface UserData {
  email: string;
  passwordHash: string;
  fullName: string;
  age: number;
  bloodGroup: string;
  phoneNumber: string;
  address: string;
}
export function Registration() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [passwordHash, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData: UserData = { email, passwordHash, fullName, age: parseInt(age), bloodGroup, phoneNumber, address };

      await registerUser(userData);
      const resetForm = () => {
        setBloodGroup("");
        setPassword("");
        setFullName("");
        setAge("");
        setEmail("");
        setPhone("");
        setAddress("");
      };
      resetForm();
      toast.success(
        <p>Registration success <span className="h-10 w-10">🙂🙂</span></p>
      )
      router.push("/login");
    } catch (error) {
      toast.error(
        <p>Registration failed <span className="h-10 w-10">😌😌</span></p>
      )
    }

  }


  return (
    <div className="relative flex items-center h-min-screen justify-center bg-[url('/login-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 mix-blend-multiply" />
      <Card className="w-full max-w-md mx-auto z-[10] items-center mt-14">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Registration</CardTitle>
          <CardDescription>Fill out the form to create an account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password-hash">Password</Label>
                <Input id="password-hash"
                  value={passwordHash}
                  className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                  type="password" placeholder="Enter password hash"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name"
                  className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number"
                  className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="blood-group">Blood Group</Label>
                <select id="blood-group"
                  className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-1 font-bold text-xl"
                  onChange={(e) => setBloodGroup(e.target.value)}
                  value={bloodGroup}
                >
                  <option value=""> select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" type="tel"
                className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your address"
                value={address}

                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email"
                className="w-full h-10 outline-none bg-gray-300 rounded-md text-black p-4 font-bold text-xl"
                value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <CardFooter className="mt-4">
              <Button type="submit" className="w-full">
                Register
              </Button>
            </CardFooter>
          </form>
          <Link href="/login" className="text-sm underline underline-offset-4" prefetch={false}>
            have an account? Sign in
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

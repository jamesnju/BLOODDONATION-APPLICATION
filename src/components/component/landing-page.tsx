/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/J0ifnngxRw1
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#003366] text-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <DropletsIcon className="h-6 w-6 text-[#00b2b2]" />
          <span className="sr-only">Hospital Blood Donation Campaign</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Donate
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#003366]">
                    Give the Gift of Life
                  </h1>
                  <p className="max-w-[600px] text-[#666666] md:text-xl">
                    Donate blood and help save lives in your community. Schedule an appointment today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b2b2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#008080] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Schedule Appointment
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Blood Donation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#003366]">Why Donate Blood?</h2>
                <p className="max-w-[900px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Blood donation is a simple way to make a significant impact on your community. Every donation can help
                  save up to three lives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Help Patients in Need</h3>
                  <p className="text-[#666666]">
                    Your donation can help patients undergoing surgery, cancer treatment, and other medical procedures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Support Your Community</h3>
                  <p className="text-[#666666]">
                    Blood donation is a simple way to make a meaningful difference in the lives of those around you.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Improve Your Health</h3>
                  <p className="text-[#666666]">
                    Donating blood can have positive effects on your own health, including reducing the risk of heart
                    disease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#003366]">The Donation Process</h2>
                <p className="max-w-[900px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Donating blood is a simple and safe process that takes about an hour from start to finish.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Registration</h3>
                  <p className="text-[#666666]">
                    Fill out a brief questionnaire about your health history and current medications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Donation</h3>
                  <p className="text-[#666666]">
                    A trained professional will draw a small amount of blood, which typically takes 8-10 minutes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">Refreshment</h3>
                  <p className="text-[#666666]">
                    Enjoy a snack and drink to replenish fluids and sugar levels before you leave.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#003366]">
                  Upcoming Blood Drives
                </h2>
                <p className="max-w-[900px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the schedule of upcoming blood drives in your area and sign up to donate.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">July 15, 2023</h3>
                  <p className="text-[#666666]">Community Center, 123 Main St, Anytown USA</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b2b2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#008080] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">August 12, 2023</h3>
                  <p className="text-[#666666]">Local Hospital, 456 Oak Rd, Anytown USA</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b2b2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#008080] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">September 9, 2023</h3>
                  <p className="text-[#666666]">Community Center, 123 Main St, Anytown USA</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b2b2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#008080] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#003366]">October 7, 2023</h3>
                  <p className="text-[#666666]">Local Hospital, 456 Oak Rd, Anytown USA</p>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b2b2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#008080] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f0f0]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#003366]">Become a Donor</h2>
                <p className="max-w-[900px] text-[#666666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below to register as a blood donor and schedule an appointment.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Input type="tel" placeholder="Phone Number" className="max-w-lg flex-1" />
                <Textarea placeholder="Additional Information" className="max-w-lg flex-1" />
                <Button type="submit" className="bg-[#00b2b2] text-white hover:bg-[#008080]">
                  Register
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#003366] text-white">
        <p className="text-xs">&copy; 2024 Hospital Blood Donation Campaign. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}

function DropletsIcon(props:any) {
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
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}

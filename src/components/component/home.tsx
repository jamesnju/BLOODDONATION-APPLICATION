"use client";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ResponsiveLine } from "@nivo/line"

export function Home() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Donation Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline">Donate Now</Button>
            <Button variant="link">Get Involved</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$1,234,567</div>
              <p className="text-muted-foreground">From 12,345 donors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">12,345</div>
              <p className="text-muted-foreground">Generous supporters</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Donation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold">$100</div>
                  <p className="text-muted-foreground">Average</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">$50</div>
                  <p className="text-muted-foreground">Median</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">45%</div>
                  <p className="text-muted-foreground">Small Donations</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lives Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">23,456</div>
              <p className="text-muted-foreground">Lives transformed</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Hospitals Supported</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Hospital A</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-muted-foreground" />
                  <p>123 Main St, Anytown USA</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hospital B</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-muted-foreground" />
                  <p>456 Oak Rd, Somewhere City</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hospital C</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <LocateIcon className="h-5 w-5 text-muted-foreground" />
                  <p>789 Elm St, Othertown</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Blood Donations Needed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Blood Donation Drive</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  There are currently 1,234 people in need of blood donations. Please consider donating to help save
                  lives.
                </p>
                <div className="mt-4">
                  <Button variant="link">Donate Blood</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Blood Donation Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
    </div>
  )
}

function LineChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}

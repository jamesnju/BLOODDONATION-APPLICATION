

import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { TopNavbar } from "@/components/component/Topnavbar";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({
    weight: "200",
    subsets: ["latin"]
},

)

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="">
            <ClientLayout>
                <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={500}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={500}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
                <div className="">
                    <TopNavbar />
                </div>
                <div className="pt-[70px]">
                    {children}
                </div>
            </ClientLayout>
        </div>
    )
}
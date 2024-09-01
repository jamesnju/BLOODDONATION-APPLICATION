

import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { TopNavbar } from "@/components/component/Topnavbar";
import NextTopLoader from 'nextjs-toploader';
import { SessionWrapper } from "@/components/auth/SessionWrapper";



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
                <div className="">
                    {/* <SessionWrapper> */}
                        {children}
                    {/* </SessionWrapper> */}
                </div>
            </ClientLayout>
        </div>
    )
}
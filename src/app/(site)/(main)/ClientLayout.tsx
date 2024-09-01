"use client"
import { useSession } from "next-auth/react";
import { SessionWrapper } from "@/components/auth/SessionWrapper";
import { TopNavbar } from "@/components/component/Topnavbar";
import NextTopLoader from 'nextjs-toploader';
import { Inter } from "next/font/google";

const inter = Inter({
    weight: "200",
    subsets: ["latin"]
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    // Show a loader or a message while the session status is being determined
    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className={`bg-bg-body ${inter.className}`}>
            {session ? (
                <>
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
                    <TopNavbar />
                    <div className="pt-[60px]">
                        {children}
                    </div>
                </>
            ) : (
            <div>
                {children}
            </div>)}
        </div>
    );
}

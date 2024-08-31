"use client"
import { store } from "@/Redux/Store";
import { Inter } from "next/font/google";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { SessionWrapper } from "@/components/auth/SessionWrapper";
const inter = Inter({
    weight: "200",
    subsets: ["latin"]
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <div className={`bg-bg-body ${inter.className}`}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                        {children}
                </QueryClientProvider>
            </Provider>
        </div>
    )
}

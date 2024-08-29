"use client"
// import { store } from "@/Redux/Store";
import { Inter } from "next/font/google";
// import { Provider } from  'react-redux';
const inter = Inter({
    weight:"200",
    subsets:["latin"]
},

)

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`bg-bg-body ${inter.className}`}>
            {/* <Provider store={store}> */}
            {children}
            {/* </Provider> */}
        </div>
    )
}
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                <p>&copy; 2023 Charitable Organization. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
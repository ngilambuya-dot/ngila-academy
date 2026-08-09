import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../app/components/Navbar';  // ✅ Changed to relative path

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ngila Academy - Master Mathematics & Computing',
    description: 'Learn mathematics and computing with interactive lessons, practice questions, and expert tutoring support.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
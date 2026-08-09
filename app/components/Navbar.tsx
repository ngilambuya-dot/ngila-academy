'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Calculator, Monitor, Search } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 border-b shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                        <span className="text-blue-600">📚</span>
                        <span>Ngila Academy</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/mathematics" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <Calculator size={18} />
                            Mathematics
                        </Link>
                        <Link href="/computing" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <Monitor size={18} />
                            Computing
                        </Link>
                        <Link href="/tutoring" className="hover:text-blue-600 transition">
                            Tutoring
                        </Link>
                        <Link href="/register" className="hover:text-blue-600 transition">
                            Register
                        </Link>
                        <Link href="/search" className="hover:text-blue-600 transition">
                            <Search size={18} />
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 border-t flex flex-col gap-4">
                        <Link href="/mathematics" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <Calculator size={18} />
                            Mathematics
                        </Link>
                        <Link href="/computing" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <Monitor size={18} />
                            Computing
                        </Link>
                        <Link href="/tutoring" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Tutoring
                        </Link>
                        <Link href="/register" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Register
                        </Link>
                        <Link href="/search" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            Search
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
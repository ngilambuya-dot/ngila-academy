'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen, PenTool, FileText, User, Award, Video, Search } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 border-b shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                        <span className="text-blue-600">📚</span>
                        <span>Ngila Academy</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/learn" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <BookOpen size={18} />
                            Learn
                        </Link>
                        <Link href="/practice" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <PenTool size={18} />
                            Practice
                        </Link>
                        <Link href="/test" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <FileText size={18} />
                            Test
                        </Link>
                        <Link href="/tutoring" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <User size={18} />
                            Tutor
                        </Link>
                        <Link href="/mastery" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <Award size={18} />
                            Mastery
                        </Link>
                        <Link href="/youtube" className="flex items-center gap-1 hover:text-blue-600 transition">
                            <Video size={18} />
                            Watch
                        </Link>
                        <Link href="/search" className="hover:text-blue-600 transition">
                            <Search size={18} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t flex flex-col gap-4">
                        <Link href="/learn" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <BookOpen size={18} /> Learn
                        </Link>
                        <Link href="/practice" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <PenTool size={18} /> Practice
                        </Link>
                        <Link href="/test" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <FileText size={18} /> Test
                        </Link>
                        <Link href="/tutoring" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <User size={18} /> Tutor
                        </Link>
                        <Link href="/mastery" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <Award size={18} /> Mastery
                        </Link>
                        <Link href="/youtube" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <Video size={18} /> Watch
                        </Link>
                        <Link href="/search" className="flex items-center gap-2 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                            <Search size={18} /> Search
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
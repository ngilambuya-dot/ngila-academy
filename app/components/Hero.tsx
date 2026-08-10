'use client';

import Link from 'next/link';
import { ArrowRight, Calculator, Monitor, Users } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
                            📚 Learn. Practice. Master.
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Master{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Mathematics
                            </span>{' '}
                            &amp;{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                Computing
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Your comprehensive learning platform. Access interactive lessons,
                            practice questions, and get personalized tutoring support.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link
                                href="/mathematics"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Start Learning <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/tutoring"
                                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                            >
                                Book a Tutor <Users size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="text-3xl mb-3">📐</div>
                            <h3 className="font-bold mb-1">Mathematics</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Algebra, Geometry, Calculus &amp; more
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="text-3xl mb-3">🎓</div>
                            <h3 className="font-bold mb-1">Interactive Lessons</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Step-by-step with practice questions
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                            <div className="text-3xl mb-3">👨‍🏫</div>
                            <h3 className="font-bold mb-1">Online Tutoring</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                One-on-one support when you need it
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
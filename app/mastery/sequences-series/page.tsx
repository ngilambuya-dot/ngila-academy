import Link from 'next/link';
import { ArrowRight, Youtube, FileText, PenTool, Award } from 'lucide-react';

export default function SequencesSeriesMastery() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/mastery" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                    ← Back to Mastery
                </Link>

                <h1 className="text-4xl font-bold mb-4">
                    🧠 How to Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sequences & Series</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 italic">
                    "Mathematics is not about numbers alone; it is about consistency, patterns, reasoning and the ability to keep learning."
                </p>

                {/* Introduction */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
                    <p className="text-gray-700 dark:text-gray-300">
                        Sequences and series become much easier when you understand the pattern rather than simply memorising formulas.
                    </p>
                </div>

                {/* Step 1: Understand the Pattern */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">Step 1 — Understand the Pattern</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Example:</p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center font-mono text-xl">
                        2, 5, 8, 11, 14, ...
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Ask yourself: <span className="font-semibold">What is changing?</span>
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Each term increases by 3. Therefore: <span className="font-semibold text-blue-600">d = 3</span>
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        This is an arithmetic progression.
                    </p>
                </div>

                {/* Step 2: Find the nth term */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">Step 2 — Find the nth term</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Formula:</p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center font-mono text-xl">
                        aₙ = a + (n-1)d
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Therefore: aₙ = 2 + (n-1)3
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-3 text-center font-mono text-xl border-2 border-green-500">
                        aₙ = 3n - 1
                    </div>
                </div>

                {/* Step 3: Practise */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                    <h2 className="text-2xl font-bold mb-3">Step 3 — Practise</h2>
                    <p className="text-gray-600 dark:text-gray-300">Find the 20th term.</p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mt-3 font-mono">
                        a₂₀ = 3(20) - 1 = 60 - 1 = 59
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-3 text-center font-mono text-xl border-2 border-green-500">
                        Answer: 59
                    </div>
                </div>

                {/* Mastery Principle */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl mb-8">
                    <h2 className="text-2xl font-bold mb-3">🎯 Mastery Principle</h2>
                    <p className="text-xl">
                        Don't rush to memorise the formula. First understand the pattern, then understand why the formula works.
                    </p>
                </div>

                {/* Learning Resources */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Link href="/mathematics/sequences-series" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <FileText className="mx-auto text-blue-600" size={32} />
                        <span className="block mt-2 font-semibold">📖 Read the Lesson</span>
                    </Link>
                    <Link href="/practice/sequences-series" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <PenTool className="mx-auto text-green-600" size={32} />
                        <span className="block mt-2 font-semibold">✏️ Practice Questions</span>
                    </Link>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <Youtube className="mx-auto text-red-600" size={32} />
                        <span className="block mt-2 font-semibold">🎥 Watch on YouTube</span>
                    </a>
                </div>

                {/* Challenge */}
                <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-3">🔥 Challenge</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Find the sum of the first 10 terms of the sequence: 2, 5, 8, 11, ...
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-dashed border-gray-400 text-center text-gray-500">
                        💡 Post your answer in the comments!
                    </div>
                </div>
            </div>
        </main>
    );
}
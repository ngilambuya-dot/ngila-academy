import Link from 'next/link';
import { ArrowRight, Video, FileText, PenTool, Award, BookOpen, Calculator, TrendingUp } from 'lucide-react';

export default function SequencesSeriesMastery() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/mastery" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                    ← Back to Mastery
                </Link>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🧠 How to Master{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Sequences & Series
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 italic">
                        "Patterns today, solutions tomorrow."
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                        A sequence is an ordered list of numbers following a pattern. A series is the sum of the terms of a sequence.
                    </p>
                </div>

                {/* Definition Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold mb-3">1. 📖 Definition</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        A <span className="font-bold text-blue-600">sequence</span> is an ordered list of numbers following a pattern.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        A <span className="font-bold text-green-600">series</span> is the sum of the terms of a sequence.
                    </p>
                    <div className="mt-3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <p className="font-mono">Sequence: 2, 5, 8, 11, ...</p>
                        <p className="font-mono mt-1">Series: 2 + 5 + 8 + 11 + ...</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">💡 Every number has a position, and every position has a value.</p>
                </div>

                {/* nth Term Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold mb-3">2. 🎯 nth Term (General Term)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                        The <span className="font-bold">nth term</span> is a formula that gives the term in position n.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-3">
                        <p className="font-mono">For the sequence: 3, 7, 11, 15, ...</p>
                        <p className="font-mono text-blue-600 font-bold mt-1">aₙ = 4n - 1</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            <p className="text-sm font-bold">n = 1</p>
                            <p className="font-mono">4(1)-1 = <span className="font-bold text-blue-600">3</span></p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            <p className="text-sm font-bold">n = 2</p>
                            <p className="font-mono">4(2)-1 = <span className="font-bold text-blue-600">7</span></p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            <p className="text-sm font-bold">n = 3</p>
                            <p className="font-mono">4(3)-1 = <span className="font-bold text-blue-600">11</span></p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">💡 Tip: Find the pattern first, then generalize it.</p>
                </div>

                {/* Arithmetic Progression */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-purple-500">
                    <h2 className="text-2xl font-bold mb-3">3. 📊 Arithmetic Progression (AP)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        A sequence with a <span className="font-bold">constant difference</span> (d) between terms.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-3">
                        <p className="font-mono">General form: a, a+d, a+2d, a+3d, ...</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <p className="font-bold text-sm">nth Term</p>
                            <p className="font-mono text-xl">aₙ = a + (n-1)d</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <p className="font-bold text-sm">Sum of n terms</p>
                            <p className="font-mono text-xl">Sₙ = n/2 [2a + (n-1)d]</p>
                        </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p className="font-bold">Example:</p>
                        <p className="text-sm">Find the 20th term of: 7, 11, 15, 19, ...</p>
                        <p className="text-sm text-gray-600 mt-1">a = 7, d = 4</p>
                        <p className="font-mono text-sm">a₂₀ = 7 + (20-1)4 = 7 + 76 = <span className="font-bold text-blue-600">83</span></p>
                    </div>
                </div>

                {/* Geometric Progression */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-orange-500">
                    <h2 className="text-2xl font-bold mb-3">4. 📈 Geometric Progression (GP)</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        A sequence with a <span className="font-bold">constant common ratio</span> (r) between terms.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-3">
                        <p className="font-mono">General form: a, ar, ar², ar³, ...</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <p className="font-bold text-sm">nth Term</p>
                            <p className="font-mono text-xl">aₙ = arⁿ⁻¹</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                            <p className="font-bold text-sm">Sum of n terms</p>
                            <p className="font-mono text-xl">Sₙ = a(1-rⁿ)/(1-r)</p>
                        </div>
                    </div>
                    <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p className="font-bold">Example:</p>
                        <p className="text-sm">Find the 10th term of: 2, 6, 18, 54, ...</p>
                        <p className="text-sm text-gray-600 mt-1">a = 2, r = 3</p>
                        <p className="font-mono text-sm">a₁₀ = 2(3)⁹ = 2(19683) = <span className="font-bold text-blue-600">39366</span></p>
                    </div>
                </div>

                {/* Summation Formulas */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8 border-l-4 border-red-500">
                    <h2 className="text-2xl font-bold mb-3">5. ∑ Important Summation Formulas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <p className="font-mono text-sm">Σk = n(n+1)/2</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <p className="font-mono text-sm">Σk² = n(n+1)(2n+1)/6</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <p className="font-mono text-sm">Σk³ = [n(n+1)/2]²</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                            <p className="font-mono text-sm">Σarᵏ⁻¹ = a(1-rⁿ)/(1-r)</p>
                        </div>
                    </div>
                </div>

                {/* Real-Life Applications */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl mb-8">
                    <h2 className="text-2xl font-bold mb-4">🌍 Real-Life Applications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h3 className="font-bold">💰 Savings & Investments</h3>
                            <p className="text-sm opacity-90">Ksh 1000 saved monthly, increasing by Ksh 200 each month → AP</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h3 className="font-bold">👥 Population Growth</h3>
                            <p className="text-sm opacity-90">Population tripling every year → GP</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h3 className="font-bold">🎯 Loan Repayment</h3>
                            <p className="text-sm opacity-90">Repayment increasing by fixed amount → AP</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h3 className="font-bold">⚡ Physics</h3>
                            <p className="text-sm opacity-90">Distance covered in equal time intervals → AP</p>
                        </div>
                    </div>
                </div>

                {/* Mastery Principle */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8 border-2 border-blue-500">
                    <h2 className="text-2xl font-bold mb-3">🎯 Mastery Principle</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        "Don't rush to memorise the formula. First understand the pattern, then understand why the formula works."
                    </p>
                </div>

                {/* Learning Resources */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Link href="/mathematics/sequences-series" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <BookOpen className="mx-auto text-blue-600" size={32} />
                        <span className="block mt-2 font-semibold">📖 Read the Lesson</span>
                    </Link>
                    <Link href="/practice/sequences-series" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <PenTool className="mx-auto text-green-600" size={32} />
                        <span className="block mt-2 font-semibold">✏️ Practice Questions</span>
                    </Link>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition text-center">
                        <Video className="mx-auto text-red-600" size={32} />
                        <span className="block mt-2 font-semibold">🎥 Watch on YouTube</span>
                    </a>
                </div>

                {/* Key Takeaways */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-8">
                    <h2 className="text-2xl font-bold mb-3">💡 Key Takeaways</h2>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>✅ Identify the pattern</li>
                        <li>✅ Find the nth term</li>
                        <li>✅ Use the right formula</li>
                        <li>✅ Practice consistently</li>
                        <li>✅ Apply to real-life problems</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-3">🚀 Ready to Master Sequences & Series?</h2>
                    <p className="mb-4 opacity-90">Small steps + Daily practice = Big results</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/mathematics/sequences-series" className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                            Start Learning
                        </Link>
                        <Link href="/tutoring" className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition">
                            Book a Tutor
                        </Link>
                    </div>
                    <p className="mt-4 text-sm opacity-75">Don't just study Mathematics, LIVE Mathematics!</p>
                </div>
            </div>
        </main>
    );
}
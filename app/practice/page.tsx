import Link from 'next/link';
import { PenTool, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function PracticePage() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-center">✏️ Practice Questions</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Test your knowledge with topic-specific questions and instant feedback
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/practice/algebra" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">📐 Algebra</h3>
                        <p className="text-gray-600 dark:text-gray-400">Linear equations, quadratics, polynomials</p>
                        <span className="inline-block mt-3 text-blue-600 text-sm">Start practicing →</span>
                    </Link>

                    <Link href="/practice/arithmetic" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">🔢 Arithmetic</h3>
                        <p className="text-gray-600 dark:text-gray-400">Fractions, decimals, percentages, operations</p>
                        <span className="inline-block mt-3 text-blue-600 text-sm">Start practicing →</span>
                    </Link>

                    <Link href="/practice/geometry" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">📐 Geometry</h3>
                        <p className="text-gray-600 dark:text-gray-400">Shapes, angles, area, volume, proofs</p>
                        <span className="inline-block mt-3 text-blue-600 text-sm">Start practicing →</span>
                    </Link>

                    <Link href="/practice/calculus" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold mb-2">∫ Calculus</h3>
                        <p className="text-gray-600 dark:text-gray-400">Limits, derivatives, integration</p>
                        <span className="inline-block mt-3 text-blue-600 text-sm">Start practicing →</span>
                    </Link>
                </div>

                <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">💡 Practice Tips</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>✅ Start with easy questions to build confidence</li>
                        <li>✅ Show all working steps</li>
                        <li>✅ Check your answers</li>
                        <li>✅ Review mistakes and try again</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
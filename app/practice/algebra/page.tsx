import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function AlgebraPractice() {
    const questions = [
        { id: 1, topic: 'Linear Equations', difficulty: 'Easy', solved: false },
        { id: 2, topic: 'Quadratic Equations', difficulty: 'Medium', solved: false },
        { id: 3, topic: 'Polynomials', difficulty: 'Hard', solved: false },
        { id: 4, topic: 'Inequalities', difficulty: 'Medium', solved: false },
        { id: 5, topic: 'Functions', difficulty: 'Hard', solved: false },
    ];

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/practice" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                    ← Back to Practice
                </Link>

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold">📐 Algebra Practice</h1>
                        <p className="text-gray-600 dark:text-gray-400">Linear equations, quadratics, polynomials, and more</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        <span className="block">Progress: 0/5</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {questions.map((q) => (
                        <div key={q.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">Question {q.id}: {q.topic}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                    q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-red-100 text-red-700'
                                    }`}>
                                    {q.difficulty}
                                </span>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                                Start
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <h3 className="font-bold mb-2">💡 Practice Tips</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
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
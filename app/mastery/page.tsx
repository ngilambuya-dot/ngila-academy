import Link from 'next/link';
import { Award, BookOpen, PenTool, FileText, User, Video } from 'lucide-react';

export default function MasteryPage() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    🧠 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Ngila Mastery Method
                    </span>
                </h1>
                <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
                    "Mathematics is not about numbers alone; it is about consistency, patterns, reasoning, and the ability to keep learning."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Step 1: Understand */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">1️⃣</span>
                            <h2 className="text-xl font-bold">UNDERSTAND</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            What does the concept mean? Read the explanation and watch the video.
                        </p>
                    </div>

                    {/* Step 2: Observe */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">2️⃣</span>
                            <h2 className="text-xl font-bold">OBSERVE</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Look at patterns and examples. See how the concept works in practice.
                        </p>
                    </div>

                    {/* Step 3: Explain */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">3️⃣</span>
                            <h2 className="text-xl font-bold">EXPLAIN</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Can you explain it in your own words? Teaching others deepens understanding.
                        </p>
                    </div>

                    {/* Step 4: Solve */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">4️⃣</span>
                            <h2 className="text-xl font-bold">SOLVE</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Work through guided examples step by step.
                        </p>
                    </div>

                    {/* Step 5: Practise */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">5️⃣</span>
                            <h2 className="text-xl font-bold">PRACTISE</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Attempt questions without assistance. Build confidence and fluency.
                        </p>
                    </div>

                    {/* Step 6: Apply */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">6️⃣</span>
                            <h2 className="text-xl font-bold">APPLY</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Use mathematics in real situations. See why it matters.
                        </p>
                    </div>

                    {/* Step 7: Test */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">7️⃣</span>
                            <h2 className="text-xl font-bold">TEST</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Take a timed assessment. Measure your progress.
                        </p>
                    </div>

                    {/* Step 8: Master */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-teal-500">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">8️⃣</span>
                            <h2 className="text-xl font-bold">MASTER</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-teal-600">"If you can teach it, you understand it."</span>
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition text-lg"
                    >
                        <BookOpen size={24} />
                        Start Your Mastery Journey
                    </Link>
                </div>
            </div>
        </main>
    );
}
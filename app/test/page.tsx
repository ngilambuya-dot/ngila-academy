import Link from 'next/link';
import { FileText, Clock, Award, BarChart } from 'lucide-react';

export default function TestPage() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-center">📝 Test Your Knowledge</h1>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Timed examinations and mock papers to assess your progress
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
                        <FileText className="mx-auto text-blue-600" size={40} />
                        <h3 className="text-xl font-bold mt-3">Topic Tests</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Focus on one topic at a time</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
                        <Clock className="mx-auto text-green-600" size={40} />
                        <h3 className="text-xl font-bold mt-3">Timed Exams</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Practice under exam conditions</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center">
                        <Award className="mx-auto text-purple-600" size={40} />
                        <h3 className="text-xl font-bold mt-3">Mastery Checks</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Track your progress</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <Link href="/test/algebra" className="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">📐 Algebra Mastery Test</h3>
                                <p className="text-sm text-gray-500">20 questions • 30 minutes</p>
                            </div>
                            <span className="text-blue-600">Start →</span>
                        </div>
                    </Link>
                    <Link href="/test/arithmetic" className="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">🔢 Arithmetic Mastery Test</h3>
                                <p className="text-sm text-gray-500">20 questions • 30 minutes</p>
                            </div>
                            <span className="text-blue-600">Start →</span>
                        </div>
                    </Link>
                    <Link href="/test/geometry" className="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">📐 Geometry Mastery Test</h3>
                                <p className="text-sm text-gray-500">20 questions • 30 minutes</p>
                            </div>
                            <span className="text-blue-600">Start →</span>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
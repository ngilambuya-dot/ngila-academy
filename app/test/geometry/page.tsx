import Link from 'next/link';
import { Clock, Award, AlertCircle } from 'lucide-react';

export default function GeometryTest() {
    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/test" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                    ← Back to Tests
                </Link>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">📐 Geometry Mastery Test</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">20 questions • 30 minutes</p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm">
                            <Clock size={18} className="text-blue-600" />
                            <span>Time Limit: 30 minutes</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <Award size={18} className="text-green-600" />
                            <span>Pass Mark: 50%</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <AlertCircle size={18} className="text-yellow-600" />
                            <span>Topics: Angles, triangles, quadrilaterals, circles</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition text-lg font-semibold">
                        Start Test
                    </button>
                </div>
            </div>
        </main>
    );
}
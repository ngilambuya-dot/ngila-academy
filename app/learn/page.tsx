import Link from 'next/link';
import { BookOpen, Calculator, Square, Circle, Sigma, BarChart, Code, TrendingUp } from 'lucide-react';

export default function LearnPage() {
    const subjects = [
        { name: 'Arithmetic', icon: Calculator, description: 'Numbers, operations, fractions, and percentages', path: '/mathematics/arithmetic', color: 'blue' },
        { name: 'Algebra', icon: Code, description: 'Expressions, equations, inequalities, and functions', path: '/mathematics/algebra', color: 'green' },
        { name: 'Geometry', icon: Square, description: 'Shapes, angles, area, volume, and proofs', path: '/mathematics/geometry', color: 'purple' },
        { name: 'Complex Numbers', icon: Circle, description: 'Numbers with real and imaginary parts', path: '/mathematics/complex-numbers', color: 'orange' },
        { name: 'Matrices', icon: Square, description: 'Operations, determinants, and inverses', path: '/mathematics/matrices', color: 'red' },
        { name: 'Sequences & Series', icon: Sigma, description: 'Arithmetic and geometric progressions', path: '/mathematics/sequences-series', color: 'indigo' },
        { name: 'Calculus', icon: TrendingUp, description: 'Limits, derivatives, integrals, and applications', path: '/mathematics/calculus', color: 'pink' },
        { name: 'Statistics', icon: BarChart, description: 'Data analysis, probability, and distributions', path: '/mathematics/statistics', color: 'teal' },
    ];

    const colorClasses = {
        blue: 'border-blue-500 hover:shadow-blue-200',
        green: 'border-green-500 hover:shadow-green-200',
        purple: 'border-purple-500 hover:shadow-purple-200',
        orange: 'border-orange-500 hover:shadow-orange-200',
        red: 'border-red-500 hover:shadow-red-200',
        indigo: 'border-indigo-500 hover:shadow-indigo-200',
        pink: 'border-pink-500 hover:shadow-pink-200',
        teal: 'border-teal-500 hover:shadow-teal-200',
    };

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">📖 Learn Mathematics</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Structured lessons from basic arithmetic to advanced calculus
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subjects.map((subject) => (
                        <Link
                            key={subject.name}
                            href={subject.path}
                            className={`block bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition border-l-4 ${colorClasses[subject.color as keyof typeof colorClasses]}`}
                        >
                            <subject.icon className="text-blue-600" size={32} />
                            <h3 className="text-xl font-bold mt-3 mb-2">{subject.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{subject.description}</p>
                            <span className="inline-block mt-3 text-blue-600 text-sm font-medium">View lessons →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
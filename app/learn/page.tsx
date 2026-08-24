import Link from 'next/link';
import {
    BookOpen, Calculator, Square, Circle, Sigma, BarChart,
    Code, TrendingUp, DollarSign, MapPin, LogIn, GitBranch,
    Hash, PieChart, Move, FunctionSquare
} from 'lucide-react';

export default function LearnPage() {
    const subjects = [
        {
            name: 'Arithmetic',
            icon: Calculator,
            description: 'Numbers, operations, fractions, and percentages',
            path: '/mathematics/arithmetic',
            color: 'blue'
        },
        {
            name: 'Algebra',
            icon: Code,
            description: 'Expressions, equations, inequalities, and functions',
            path: '/mathematics/algebra',
            color: 'green'
        },
        {
            name: 'Geometry',
            icon: Square,
            description: 'Shapes, angles, area, volume, and proofs',
            path: '/mathematics/geometry',
            color: 'purple'
        },
        {
            name: 'Trigonometry',
            icon: FunctionSquare,
            description: 'Sine, cosine, tangent, and trigonometric identities',
            path: '/mathematics/trigonometry',
            color: 'orange'
        },
        {
            name: 'Coordinate Geometry',
            icon: MapPin,
            description: 'Gradients, equations of lines, and graphs',
            path: '/mathematics/coordinate-geometry',
            color: 'teal'
        },
        {
            name: 'Financial Mathematics',
            icon: DollarSign,
            description: 'Interest, profit, discounts, and loans',
            path: '/mathematics/financial-mathematics',
            color: 'emerald'
        },
        {
            name: 'Probability',
            icon: PieChart,
            description: 'Chance, events, and probability trees',
            path: '/mathematics/probability',
            color: 'pink'
        },
        {
            name: 'Complex Numbers',
            icon: Circle,
            description: 'Numbers with real and imaginary parts',
            path: '/mathematics/complex-numbers',
            color: 'indigo'
        },
        {
            name: 'Vectors',
            icon: Move,
            description: 'Vector operations, magnitude, and direction',
            path: '/mathematics/vectors',
            color: 'red'
        },
        {
            name: 'Matrices',
            icon: Square,
            description: 'Operations, determinants, and inverses',
            path: '/mathematics/matrices',
            color: 'yellow'
        },
        {
            name: 'Sequences & Series',
            icon: Sigma,
            description: 'Arithmetic and geometric progressions',
            path: '/mathematics/sequences-series',
            color: 'indigo'
        },
        {
            name: 'Set Theory',
            icon: GitBranch,
            description: 'Sets, Venn diagrams, and operations on sets',
            path: '/mathematics/set-theory',
            color: 'lime'
        },
        {
            name: 'Logarithms',
            icon: LogIn,
            description: 'Laws of logarithms, equations, and applications',
            path: '/mathematics/logarithms',
            color: 'amber'
        },
        {
            name: 'Calculus',
            icon: TrendingUp,
            description: 'Limits, derivatives, integrals, and applications',
            path: '/mathematics/calculus',
            color: 'rose'
        },
        {
            name: 'Statistics',
            icon: BarChart,
            description: 'Data analysis, probability, and distributions',
            path: '/mathematics/statistics',
            color: 'cyan'
        },
    ];

    const colorClasses: Record<string, string> = {
        blue: 'border-blue-500 hover:shadow-blue-200',
        green: 'border-green-500 hover:shadow-green-200',
        purple: 'border-purple-500 hover:shadow-purple-200',
        orange: 'border-orange-500 hover:shadow-orange-200',
        teal: 'border-teal-500 hover:shadow-teal-200',
        emerald: 'border-emerald-500 hover:shadow-emerald-200',
        pink: 'border-pink-500 hover:shadow-pink-200',
        indigo: 'border-indigo-500 hover:shadow-indigo-200',
        red: 'border-red-500 hover:shadow-red-200',
        yellow: 'border-yellow-500 hover:shadow-yellow-200',
        lime: 'border-lime-500 hover:shadow-lime-200',
        amber: 'border-amber-500 hover:shadow-amber-200',
        rose: 'border-rose-500 hover:shadow-rose-200',
        cyan: 'border-cyan-500 hover:shadow-cyan-200',
    };

    const iconColors: Record<string, string> = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600',
        teal: 'text-teal-600',
        emerald: 'text-emerald-600',
        pink: 'text-pink-600',
        indigo: 'text-indigo-600',
        red: 'text-red-600',
        yellow: 'text-yellow-600',
        lime: 'text-lime-600',
        amber: 'text-amber-600',
        rose: 'text-rose-600',
        cyan: 'text-cyan-600',
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
                            className={`block bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition border-l-4 ${colorClasses[subject.color]}`}
                        >
                            <subject.icon className={`${iconColors[subject.color]}`} size={32} />
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
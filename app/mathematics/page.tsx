import Link from 'next/link';
import { getTopics, getSubjectMetadata, getTopicMetadata } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

export default async function MathematicsPage() {
    const topics = getTopics('mathematics');
    const meta = getSubjectMetadata('mathematics');

    // Sort topics alphabetically or in a specific order
    const sortedTopics = topics.sort((a, b) => {
        const order = {
            arithmetic: 1,
            algebra: 2,
            geometry: 3,
            trigonometry: 4,
            'coordinate-geometry': 5,
            'financial-mathematics': 6,
            probability: 7,
            'complex-numbers': 8,
            vectors: 9,
            matrices: 10,
            'sequences-series': 11,
            'set-theory': 12,
            logarithms: 13,
            calculus: 14,
            statistics: 15
        };
        return (order[a as keyof typeof order] || 999) - (order[b as keyof typeof order] || 999);
    });

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span>{meta.icon}</span>
                        {meta.name}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                        {meta.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedTopics.map((topic) => {
                        const topicMeta = getTopicMetadata('mathematics', topic);
                        return (
                            <Link
                                key={topic}
                                href={`/mathematics/${topic}`}
                                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
                            >
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                                    {topicMeta.name || topic.replace(/-/g, ' ')}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {topicMeta.description || 'Explore this topic'}
                                </p>
                                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium">
                                    View lessons <ArrowRight size={16} />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
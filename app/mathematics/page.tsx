import Link from 'next/link';
import { getSubjects, getSubjectMetadata } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

export default async function MathematicsPage() {
    const subjects = getSubjects();
    const meta = getSubjectMetadata('mathematics');

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
                    {subjects.map((subject) => {
                        const topicMeta = getTopicMetadata('mathematics', subject);
                        return (
                            <Link
                                key={subject}
                                href={`/mathematics/${subject}`}
                                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
                            >
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                                    {topicMeta.name || subject}
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
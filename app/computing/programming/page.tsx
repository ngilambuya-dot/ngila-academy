import Link from 'next/link';
import { getLessons, getTopicMetadata } from '@/lib/content';
import { Clock, BookOpen } from 'lucide-react';

export default async function ProgrammingPage() {
    const topic = 'programming';
    const lessons = getLessons('computing', topic);
    const meta = getTopicMetadata('computing', topic);

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/computing" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
                    ← Back to Computing
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">{meta.name || 'Programming'}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{meta.description}</p>
                </div>

                <div className="space-y-3">
                    {lessons.length > 0 ? (
                        lessons.map((lesson, index) => (
                            <Link
                                key={lesson.slug}
                                href={`/computing/programming/${lesson.slug}`}
                                className="block bg-white dark:bg-gray-800 p-4 rounded-lg border hover:border-purple-500 transition group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-sm font-bold text-purple-600">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold group-hover:text-purple-600 transition">
                                            {lesson.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {lesson.duration || '10 min'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <BookOpen size={14} />
                                                Lesson
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 text-gray-400 group-hover:text-purple-600 transition">
                                        →
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border">
                            <p className="text-gray-500 dark:text-gray-400">No lessons available yet for Programming.</p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Check back soon for new content!</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
import Link from 'next/link';
import { getLessons, getTopicMetadata } from '@/lib/content';
import { Clock, BookOpen, ArrowLeft } from 'lucide-react';

export default async function AlgebraPage() {
    const topic = 'algebra';
    const lessons = getLessons('mathematics', topic);
    const meta = getTopicMetadata('mathematics', topic);

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back button */}
                <Link href="/mathematics" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
                    ← Back to Mathematics
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">{meta.name || 'Algebra'}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{meta.description}</p>
                </div>

                {/* Lessons List */}
                <div className="space-y-3">
                    {lessons.map((lesson, index) => (
                        <Link
                            key={lesson.slug}
                            href={`/mathematics/algebra/${lesson.slug}`}
                            className="block bg-white dark:bg-gray-800 p-4 rounded-lg border hover:border-blue-500 transition group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-bold text-blue-600">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold group-hover:text-blue-600 transition">
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
                                <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition">
                                    →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
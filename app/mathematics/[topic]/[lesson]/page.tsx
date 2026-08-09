import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLessonContent, getLessons } from '@/lib/content';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Clock, BookOpen, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

interface PageProps {
    params: Promise<{
        topic: string;
        lesson: string;
    }>;
}

export default async function LessonPage({ params }: PageProps) {
    const { topic, lesson } = await params;
    const lessonData = getLessonContent('mathematics', topic, lesson);
    const allLessons = getLessons('mathematics', topic);

    if (!lessonData) {
        notFound();
    }

    const currentIndex = allLessons.findIndex(l => l.slug === lesson);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    return (
        <main className="min-h-screen py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link href="/mathematics" className="hover:text-blue-600">Mathematics</Link>
                    {' › '}
                    <Link href={`/mathematics/${topic}`} className="hover:text-blue-600 capitalize">
                        {topic.replace(/-/g, ' ')}
                    </Link>
                    {' › '}
                    <span className="text-gray-900 dark:text-gray-100">{lessonData.title}</span>
                </nav>

                {/* Lesson Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                        <span className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                            <Clock size={14} />
                            {lessonData.metadata.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                            <BookOpen size={14} />
                            {lessonData.metadata.level}
                        </span>
                        {lessonData.metadata.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                                <Tag size={14} />
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold mb-3">{lessonData.title}</h1>

                    {/* Learning Objectives */}
                    {lessonData.metadata.learningObjectives.length > 0 && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                            <h3 className="font-semibold mb-2">🎯 Learning Objectives</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {lessonData.metadata.learningObjectives.map((obj, i) => (
                                    <li key={i} className="text-gray-700 dark:text-gray-300">{obj}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Lesson Content */}
                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {lessonData.content}
                    </ReactMarkdown>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-6 border-t">
                    {prevLesson ? (
                        <Link
                            href={`/mathematics/${topic}/${prevLesson.slug}`}
                            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                        >
                            <ChevronLeft size={18} />
                            Previous: {prevLesson.title}
                        </Link>
                    ) : (
                        <span></span>
                    )}
                    {nextLesson ? (
                        <Link
                            href={`/mathematics/${topic}/${nextLesson.slug}`}
                            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                        >
                            Next: {nextLesson.title}
                            <ChevronRight size={18} />
                        </Link>
                    ) : (
                        <span></span>
                    )}
                </div>
            </div>
        </main>
    );
}
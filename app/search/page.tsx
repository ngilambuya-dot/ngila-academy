'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

interface SearchResult {
    subject: string;
    topic: string;
    lesson: {
        slug: string;
        title: string;
        metadata: {
            title: string;
            topic: string;
            level: string;
            tags: string[];
        };
        content: string;
    };
}

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const searchLessons = async () => {
            if (query.length < 2) {
                setResults([]);
                return;
            }

            setIsLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await res.json();
                setResults(data.results || []);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        const debounce = setTimeout(searchLessons, 300);
        return () => clearTimeout(debounce);
    }, [query]);

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold mb-2">🔍 Search Lessons</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Find specific topics across Mathematics and Computing
                </p>

                {/* Search Input */}
                <div className="relative mb-8">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for topics, concepts, or keywords..."
                        className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>

                {/* Results */}
                {isLoading && (
                    <div className="text-center py-8 text-gray-500">Searching...</div>
                )}

                {!isLoading && results.length === 0 && query.length >= 2 && (
                    <div className="text-center py-8 text-gray-500">
                        No results found for "{query}"
                    </div>
                )}

                {!isLoading && results.length > 0 && (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            Found {results.length} result{results.length > 1 ? 's' : ''}
                        </p>
                        {results.map((result, index) => (
                            <Link
                                key={index}
                                href={`/${result.subject}/${result.topic}/${result.lesson.slug}`}
                                className="block bg-white dark:bg-gray-800 p-4 rounded-lg border hover:border-blue-500 transition"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                                            {result.lesson.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            {result.subject} › {result.topic.replace(/-/g, ' ')}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {result.lesson.metadata.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-0.5 rounded"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                            <span className="bg-blue-100 dark:bg-blue-900/30 text-xs px-2 py-0.5 rounded">
                                                {result.lesson.metadata.level}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-gray-400">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
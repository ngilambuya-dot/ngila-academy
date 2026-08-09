import Hero from '../app/components/Hero';
import Link from 'next/link';
import { Calculator, Monitor, BookOpen, Users, Award } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Hero />

            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Learn With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="text-blue-600" size={32} />
                            </div>
                            <h3 className="font-semibold mb-2">Structured Content</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Learn step-by-step with our organized "digital textbook" format
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="text-green-600" size={32} />
                            </div>
                            <h3 className="font-semibold mb-2">Practice &amp; Master</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Test your knowledge with practice questions and quizzes
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-purple-600" size={32} />
                            </div>
                            <h3 className="font-semibold mb-2">Expert Tutoring</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Get personalized support through our online tutoring service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Link
                            href="/mathematics"
                            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <Calculator size={48} className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition" />
                            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Algebra, Geometry, Calculus &amp; more
                            </p>
                        </Link>
                        <Link
                            href="/computing"
                            className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <Monitor size={48} className="text-purple-600 mx-auto mb-4 group-hover:scale-110 transition" />
                            <h3 className="text-xl font-bold mb-2">Computing</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Programming, Databases &amp; Web Development
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
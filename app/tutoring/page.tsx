'use client';

import { useState } from 'react';
import { User, BookOpen, Send, CheckCircle } from 'lucide-react';

export default function TutoringPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'mathematics',
        topic: 'algebra',
        level: 'secondary',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Tutoring Request:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
                        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Request Sent Successfully!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Thank you for your tutoring request. We'll contact you within 24 hours.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-blue-600 hover:underline"
                        >
                            Submit another request
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl font-bold mb-2">📚 Book a Tutor</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Get personalized one-on-one tutoring for Mathematics or Computing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <User size={20} />
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email *</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <BookOpen size={20} />
                            Tutoring Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Subject *</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                >
                                    <option value="mathematics">Mathematics</option>
                                    <option value="computing">Computing</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Topic</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Algebra, Programming, etc."
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.topic}
                                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Level *</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.level}
                                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                >
                                    <option value="primary">Primary School</option>
                                    <option value="secondary">Secondary School</option>
                                    <option value="college">College / TVET</option>
                                    <option value="university">University</option>
                                    <option value="adult">Adult Learner</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Preferred Date *</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.preferredDate}
                                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Preferred Time</label>
                                <input
                                    type="time"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.preferredTime}
                                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <label className="block text-sm font-medium mb-2">Additional Information</label>
                        <textarea
                            rows={4}
                            placeholder="Any specific topics you'd like to cover or questions you have..."
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                        <Send size={20} />
                        Request Tutoring
                    </button>
                </form>
            </div>
        </main>
    );
}
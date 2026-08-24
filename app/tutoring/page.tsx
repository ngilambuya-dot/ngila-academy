'use client';

import { useState } from 'react';
import { Calendar, Clock, User, BookOpen, Send, CheckCircle, Users, Award, FileText } from 'lucide-react';

export default function TutoringPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'mathematics',
        level: 'secondary',
        tutoringType: 'concept',
        sessionDuration: '2',
        topic: '',
        preferredDate: '',
        preferredTime: '',
        preferredTutor: 'any',
        message: ''
    });
    const [step, setStep] = useState(1);
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
                        <h2 className="text-2xl font-bold mb-2">Booking Confirmed! ✅</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Your 2-hour session has been booked successfully.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-left mb-6">
                            <p><strong>Session Type:</strong> {formData.tutoringType}</p>
                            <p><strong>Duration:</strong> {formData.sessionDuration} hours</p>
                            <p><strong>Date:</strong> {formData.preferredDate}</p>
                            <p><strong>Time:</strong> {formData.preferredTime}</p>
                        </div>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-blue-600 hover:underline"
                        >
                            Book Another Session
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">🎓 Book a 2-Hour Mastery Session</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Master the concept. Master the method. Master the exam.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step Indicator */}
                    <div className="flex justify-between items-center text-sm">
                        <span className={step >= 1 ? 'text-blue-600 font-bold' : 'text-gray-400'}>1. Details</span>
                        <span className={step >= 2 ? 'text-blue-600 font-bold' : 'text-gray-400'}>2. Session</span>
                        <span className={step >= 3 ? 'text-blue-600 font-bold' : 'text-gray-400'}>3. Confirm</span>
                    </div>

                    {/* Personal Information */}
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

                    {/* Session Details */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <BookOpen size={20} />
                            Session Details
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
                                    <option value="accounting">Accounting</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Level *</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.level}
                                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                >
                                    <option value="artisan">Artisan</option>
                                    <option value="craft">Craft</option>
                                    <option value="diploma">Diploma</option>
                                    <option value="college">College/University</option>
                                    <option value="secondary">Secondary School</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Tutoring Type *</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.tutoringType}
                                    onChange={(e) => setFormData({ ...formData, tutoringType: e.target.value })}
                                >
                                    <option value="concept">📖 Concept Lesson</option>
                                    <option value="exam">✏️ Exam Preparation</option>
                                    <option value="problem">🧮 Problem-Solving Session</option>
                                    <option value="assignment">📋 Assignment Support</option>
                                    <option value="revision">🎯 Revision Programme</option>
                                    <option value="mock">📝 Mock Examination</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Session Duration *</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.sessionDuration}
                                    onChange={(e) => setFormData({ ...formData, sessionDuration: e.target.value })}
                                >
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hours — College Lesson</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Topic</label>
                                <input
                                    type="text"
                                    placeholder="e.g., Differentiation, Integration, Algebra..."
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.topic}
                                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Calendar size={20} />
                            Schedule
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <div>
                                <label className="block text-sm font-medium mb-1">Preferred Time *</label>
                                <input
                                    type="time"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.preferredTime}
                                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium mb-1">Preferred Tutor</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                    value={formData.preferredTutor}
                                    onChange={(e) => setFormData({ ...formData, preferredTutor: e.target.value })}
                                >
                                    <option value="any">Any Available Tutor</option>
                                    <option value="alex">Alex Ngila</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
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
                        className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg"
                    >
                        <Send size={20} />
                        Book 2-Hour Mastery Session
                    </button>
                </form>
            </div>
        </main>
    );
}
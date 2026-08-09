'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Registration:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                    <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
                        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Welcome to Ngila Academy! Check your email for confirmation.
                        </p>
                        <Link
                            href="/mathematics"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Start Learning <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Create Account</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Join Ngila Academy and start learning
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name *</label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="text"
                                required
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email *</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="email"
                                required
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password *</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="password"
                                required
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password *</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <input
                                type="password"
                                required
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">I am a *</label>
                        <select
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="student">Student / Learner</option>
                            <option value="parent">Parent</option>
                            <option value="teacher">Teacher / Tutor</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                        Create Account <ArrowRight size={18} />
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
                    </p>
                </form>
            </div>
        </main>
    );
}
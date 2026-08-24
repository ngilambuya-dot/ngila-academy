'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, CheckCircle, Clock, TrendingUp, ArrowRight } from 'lucide-react';

interface Question {
    id: number;
    topic: string;
    difficulty: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export default function AlgebraPractice() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

    const questions: Question[] = [
        {
            id: 1,
            topic: 'Linear Equations',
            difficulty: 'Easy',
            question: 'Solve for x: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correctAnswer: 1,
            explanation: '2x + 5 = 13 → 2x = 8 → x = 4'
        },
        {
            id: 2,
            topic: 'Quadratic Equations',
            difficulty: 'Medium',
            question: 'Solve for x: x² - 5x + 6 = 0',
            options: ['x = 2, 3', 'x = -2, -3', 'x = 1, 6', 'x = -1, -6'],
            correctAnswer: 0,
            explanation: '(x - 2)(x - 3) = 0 → x = 2, 3'
        },
        {
            id: 3,
            topic: 'Polynomials',
            difficulty: 'Hard',
            question: 'Factorize: x² - 9',
            options: ['(x+3)(x-3)', '(x+9)(x-1)', '(x-9)(x+1)', '(x+3)²'],
            correctAnswer: 0,
            explanation: 'x² - 9 = (x+3)(x-3) (Difference of squares)'
        },
        {
            id: 4,
            topic: 'Inequalities',
            difficulty: 'Medium',
            question: 'Solve: 3x - 7 > 8',
            options: ['x > 5', 'x < 5', 'x > 15', 'x < 15'],
            correctAnswer: 0,
            explanation: '3x - 7 > 8 → 3x > 15 → x > 5'
        },
        {
            id: 5,
            topic: 'Functions',
            difficulty: 'Hard',
            question: 'If f(x) = 2x + 3, find f(4)',
            options: ['8', '9', '10', '11'],
            correctAnswer: 3,
            explanation: 'f(4) = 2(4) + 3 = 8 + 3 = 11'
        }
    ];

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(index);
        setShowExplanation(true);
        if (index === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (!answeredQuestions.includes(currentQuestion)) {
            setAnsweredQuestions([...answeredQuestions, currentQuestion]);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setShowResult(true);
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setShowResult(false);
        setAnsweredQuestions([]);
    };

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <main className="min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-2xl">
                    <Link href="/practice" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                        ← Back to Practice
                    </Link>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">📊 Results</h2>
                        <div className="text-6xl font-bold mb-4">{percentage}%</div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            You got {score} out of {questions.length} questions correct
                        </p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                            <div
                                className={`h-4 rounded-full ${percentage >= 70 ? 'bg-green-500' :
                                    percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            {percentage >= 70 ? '🎉 Great job! You\'ve mastered this topic!' :
                                percentage >= 40 ? '📚 Keep practicing to improve!' :
                                    '💪 Review the material and try again!'}
                        </p>
                        <button
                            onClick={handleReset}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    const q = questions[currentQuestion];
    const isCorrect = selectedAnswer === q.correctAnswer;
    const isWrong = selectedAnswer !== null && selectedAnswer !== q.correctAnswer;

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <Link href="/practice" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                    ← Back to Practice
                </Link>

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">📐 Algebra Practice</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Question {currentQuestion + 1} of {questions.length}
                        </p>
                    </div>
                    <div className="text-sm text-gray-500">
                        <span className="block">Score: {score}/{questions.length}</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className={`text-xs px-3 py-1 rounded ${q.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            q.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                            }`}>
                            {q.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">{q.topic}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-6">{q.question}</h3>

                    <div className="space-y-3">
                        {q.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                disabled={selectedAnswer !== null}
                                className={`w-full text-left p-4 rounded-lg border-2 transition ${selectedAnswer === null ? 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20' :
                                    index === q.correctAnswer ? 'border-green-500 bg-green-50 dark:bg-green-900/20' :
                                        selectedAnswer === index ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                                            'border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                                {option}
                                {selectedAnswer !== null && index === q.correctAnswer && (
                                    <span className="ml-2 text-green-500">✅</span>
                                )}
                                {selectedAnswer === index && index !== q.correctAnswer && (
                                    <span className="ml-2 text-red-500">❌</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {showExplanation && (
                        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200' :
                            'bg-red-50 dark:bg-red-900/20 border border-red-200'
                            }`}>
                            <p className="font-semibold">{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{q.explanation}</p>
                        </div>
                    )}

                    {selectedAnswer !== null && (
                        <button
                            onClick={handleNext}
                            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                        >
                            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                            <ArrowRight size={18} />
                        </button>
                    )}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                    <h3 className="font-bold mb-2">💡 Practice Tips</h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>✅ Start with easy questions to build confidence</li>
                        <li>✅ Show all working steps</li>
                        <li>✅ Check your answers</li>
                        <li>✅ Review mistakes and try again</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
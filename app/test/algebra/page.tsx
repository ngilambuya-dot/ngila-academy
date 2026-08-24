'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Clock, Award, AlertCircle, ArrowRight } from 'lucide-react';

interface TestQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export default function AlgebraTest() {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes
    const [timerStarted, setTimerStarted] = useState(false);

    const questions: TestQuestion[] = [
        {
            id: 1,
            question: 'Solve for x: 2x + 7 = 21',
            options: ['x = 7', 'x = 14', 'x = 28', 'x = 5'],
            correctAnswer: 0,
            explanation: '2x + 7 = 21 → 2x = 14 → x = 7'
        },
        {
            id: 2,
            question: 'Factorize: x² - 16',
            options: ['(x+4)(x-4)', '(x+8)(x-2)', '(x-16)(x+1)', '(x+4)²'],
            correctAnswer: 0,
            explanation: 'x² - 16 = (x+4)(x-4) (Difference of squares)'
        },
        {
            id: 3,
            question: 'Solve: 3x - 5 = 16',
            options: ['x = 7', 'x = 5', 'x = 21', 'x = 11'],
            correctAnswer: 0,
            explanation: '3x - 5 = 16 → 3x = 21 → x = 7'
        },
        // Add more questions here for a full test...
    ];

    const handleStart = () => {
        setStarted(true);
        setTimerStarted(true);
    };

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(index);
        setShowExplanation(true);
        if (index === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
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
        setStarted(false);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore(0);
        setShowResult(false);
        setTimeRemaining(30 * 60);
        setTimerStarted(false);
    };

    if (!started) {
        return (
            <main className="min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-2xl">
                    <Link href="/test" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
                        ← Back to Tests
                    </Link>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h1 className="text-3xl font-bold mb-4">📐 Algebra Mastery Test</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">20 questions • 30 minutes</p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-sm">
                                <Clock size={18} className="text-blue-600" />
                                <span>Time Limit: 30 minutes</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Award size={18} className="text-green-600" />
                                <span>Pass Mark: 50%</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <AlertCircle size={18} className="text-yellow-600" />
                                <span>Topics: Linear equations, quadratics, polynomials</span>
                            </div>
                        </div>

                        <button
                            onClick={handleStart}
                            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition text-lg font-semibold"
                        >
                            Start Test
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <main className="min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                        <h2 className="text-3xl font-bold mb-4">📊 Test Results</h2>
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
                            {percentage >= 70 ? '🎉 Excellent! You\'ve mastered Algebra!' :
                                percentage >= 40 ? '📚 Good effort! Review the topics you got wrong.' :
                                    '💪 Keep studying! Review the material and try again.'}
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

    return (
        <main className="min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">
                            Question {currentQuestion + 1} of {questions.length}
                        </span>
                        <span className="text-sm text-gray-500">
                            Score: {score}/{questions.length}
                        </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-6">{q.question}</h3>

                    <div className="space-y-3">
                        {q.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                disabled={selectedAnswer !== null}
                                className={`w-full text-left p-4 rounded-lg border-2 transition ${selectedAnswer === null ? 'hover:border-blue-500 hover:bg-blue-50' :
                                    index === q.correctAnswer ? 'border-green-500 bg-green-50' :
                                        selectedAnswer === index ? 'border-red-500 bg-red-50' :
                                            'border-gray-200'
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
                        <div className={`mt-6 p-4 rounded-lg ${selectedAnswer === q.correctAnswer ? 'bg-green-50 border border-green-200' :
                            'bg-red-50 border border-red-200'
                            }`}>
                            <p className="font-semibold">{selectedAnswer === q.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}</p>
                            <p className="text-sm text-gray-600 mt-1">{q.explanation}</p>
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
            </div>
        </main>
    );
}